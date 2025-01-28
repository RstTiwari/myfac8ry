import React, { useEffect, useState } from "react";
import { Form, Input, Checkbox, Button, Row, Col, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import RegisterForm from "../Form/SignupForm"; // Import Register form
import { Link } from "react-router-dom";
import { Cookie } from "@mui/icons-material";
import AuthService from "../Class/AuthClass";
import { LocalStorageHelper } from "../Class/LocalstorageHelper";
import { NavigationHelper } from "../Class/Navigator";
import AlertDialogue from "../Comman/AlertDialogue";


const { Text } = Typography;

const SignInForm: React.FC<{ hideModal: () => void }> = ({ hideModal }) => {
    const [form] = Form.useForm();
    const [otpSend,setOtpSend] = useState(false)
    const [loading, setLoading] = useState(false);
    const [currentForm, setCurrentForm] = useState<
        "signin" | "register" | "forgotPassword"
    >("register"); // manage which form to display

    const handleSubmit = () => {
        form.validateFields().then(() => {
        });
    };

    const handleLoginUser = async () => {
        form.validateFields();
        setLoading(true);
        let data = form.getFieldsValue();
        let response = await new AuthService().loginUser(data);
        if (response.success) {
            setLoading(false);
            LocalStorageHelper.storeToken(
                "token",
                response.result.token,
                response.result.expiresIn
            );
            LocalStorageHelper.save(
                "email",
                response.result.user.email,
            );
            LocalStorageHelper.save(
                "userId",
                response.result.user.userId,
            );
              LocalStorageHelper.save(
                "name",
                response.result.user.name,
            );
            LocalStorageHelper.save(
                "tenantId",
                response.result.tenant.tenantId
            );
            hideModal();
        } else {
            return AlertDialogue("info", response.message);
        }
    };

    const handleFormChange = (
        formType: "signin" | "register" | "forgotPassword"
    ) => {
        setCurrentForm(formType); // change the form being displayed
    };


    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ padding: 20 }}
        >
            {currentForm === "signin" && (
                <>
                    {/* SignIn Form */}
                    <Form.Item
                        label={"Email"}
                        name={"email"}
                        rules={[
                            { required: true },
                            {
                                type: "email",
                                message: "Please enter a valid email!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Email"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        label={"Password"}
                        name={"password"}
                        rules={[{ required: true }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>
                    <Row justify={"center"}>
                        <Form.Item name={"remember"} valuePropName="checked">
                            <Checkbox
                            >
                                Remember-Me
                            </Checkbox>
                        </Form.Item>
                    </Row>
                    <Row justify={"center"} style={{ margin: "1rem" }}>
                        <Col>New to Myfac8ry - </Col>
                        <Col>
                            <Text
                                type="success"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleFormChange("register")}
                            >
                                Register
                            </Text>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Text
                            type="warning"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleFormChange("forgotPassword")}
                        >
                            Forgot Password
                        </Text>
                    </Row>
                    <Form.Item>
                        <Row justify={"center"}>
                            <Button
                                style={{
                                    background: "#22b378",
                                    color: "white",
                                }}
                                onClick={handleLoginUser}
                            >
                                CONTINUE
                            </Button>
                        </Row>
                    </Form.Item>
                </>
            )}
            {currentForm == "register" && (
                <RegisterForm
                    hideModal={hideModal}
                    handleFormChange={handleFormChange}
                    form={form}
                />
            )}
            {currentForm === "forgotPassword" && (
                <>
                    {/* Forgot Password Form */}
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true }, { type: "email" }]}
                        hidden={otpSend}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            type="email"
                            placeholder="Enter your email"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        label="ENTER THE OTP"
                        name="otp"
                        rules={[{ required: true }]}
                        hidden={!otpSend}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            type="text"
                            placeholder="Enter your OTP"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        label="ENTER THE PASSWORD"
                        name="password"
                        rules={[{ required: true }]}
                        hidden={!otpSend}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            type="text"
                            placeholder="Enter your OTP"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        label=" RE ENTER THE PASSWORD"
                        name="password"
                        rules={[{ required: true }]}
                        hidden={!otpSend}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            type="text"
                            placeholder="Enter your OTP"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Row justify={"center"}>
                            <Button htmlType="submit">Submit</Button>
                        </Row>
                    </Form.Item>
                    <Row justify={"center"}>
                        <Col>
                            <Text
                                onClick={() => handleFormChange("signin")}
                                type="success"
                            >
                                Go back to SignIn
                            </Text>
                        </Col>
                    </Row>
                </>
            )}
        </Form>
    );
};

export default SignInForm;
