import React, { useEffect, useState } from "react";
import { Form, Input, Row, Typography, Button, FormInstance } from "antd";
import { UserOutlined, LockOutlined, LoadingOutlined } from "@ant-design/icons";
import AuthService from "../Class/AuthClass";
import { NavigationHelper } from "../Class/Navigator";
import AlertDialogue from "../Comman/AlertDialogue";
import { LocalStorageHelper } from "../Class/LocalstorageHelper";
const { Text } = Typography;

const RegisterForm = ({
    hideModal,
    handleFormChange,
    form,
}: {
    hideModal: () => void;
    handleFormChange: Function;
    form: FormInstance;
}) => {
    interface userVerifyData {
        userId: string;
        tenantId: string;
        emailOtp: string;
    }
    const [otpSended, setOtpSend] = useState(false);
    const [loading, setLoading] = useState(false);
    const [verifyData, setVerifyData] = useState<userVerifyData>({
        userId: "",
        tenantId: "",
        emailOtp: "",
    });
    const handleUserRegistration = async () => {
        setLoading(true);
        let data = form.getFieldsValue();
        let response = await new AuthService().registerUser(data);
        if (response.success) {
            setLoading(false);
            setOtpSend(true);
            setVerifyData((prevState) => ({
                ...prevState,
                userId: response.result.user.userId,
                tenantId: response.result.tenant.tenantId,
            }));
        } else {
            return AlertDialogue("info", response.message);
        }
    };

    const handleUserVerify = async () => {
        setLoading(true);
        let response = await new AuthService().verifyUser(verifyData);
        if (response.success) {
            //save the token data in local storage
            setLoading(false);
            LocalStorageHelper.storeToken(
                "token",
                response.result.token,
                response.result.expiresIn
            );
            LocalStorageHelper.save("email", response.result.user.email);
            LocalStorageHelper.save("userId", response.result.user.userId);
            LocalStorageHelper.save("name", response.result.user.name);
            LocalStorageHelper.save(
                "tenantId",
                response.result.tenant.tenantId
            );
            hideModal();
        } else {
            return AlertDialogue("info", response.message);
        }
    };

    if (loading) {
        return <LoadingOutlined />;
    }

    return (
        <>
            {!otpSended ? (
                <>
                    <Form.Item
                        label={"Company Name"}
                        name={"companyName"}
                        labelAlign="left"
                        labelCol={{ span: 10 }}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Company Name" size={"large"} />
                    </Form.Item>
                    <Form.Item
                        label={"Your Name"}
                        name={"name"}
                        labelAlign="left"
                        labelCol={{ span: 6 }}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Your Name" size={"large"} />
                    </Form.Item>
                    <Form.Item
                        label={"Email"}
                        name={"email"}
                        labelAlign="left"
                        labelCol={{ span: 6 }}
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: "email",
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder={"Email"}
                            type={"email"}
                            size={"large"}
                        />
                    </Form.Item>
                    <Form.Item
                        label={"Password"}
                        name={"password"}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        labelAlign="left"
                        labelCol={{ span: 6 }}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="password"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Row justify={"center"}>
                            ExistingUser -
                            <Text
                                type="success"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleFormChange("signin")} // Switch to Register form
                            >
                                Login
                            </Text>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Row justify={"center"}>
                            <Button
                                style={{
                                    background: "#22b378",
                                    color: "white",
                                }}
                                onClick={handleUserRegistration}
                            >
                                REGISTER
                            </Button>
                        </Row>
                    </Form.Item>
                </>
            ) : (
                <>
                    <Row style={{padding:10}}>
                        A 6 DIGIT OTP has been send to Email{" "}
                        {`${form.getFieldValue("email")}`}{" "}
                    </Row>
                    <Form.Item
                        label={"ENTER OTP"}
                        name={"otp"}
                        labelAlign="left"
                        labelCol={{ span: 10 }}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            placeholder="Otp"
                            size={"large"}
                            onChange={(e) => {
                                setVerifyData((prevState) => ({
                                    ...prevState, // Spread the previous state to preserve other fields
                                    emailOtp: e.target.value, // Update only the emailOtp value
                                }));
                            }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Row justify={"center"}>
                            <Button
                                style={{
                                    background: "#22b378",
                                    color: "white",
                                }}
                                onClick={handleUserVerify}
                            >
                                Verify
                            </Button>
                        </Row>
                    </Form.Item>
                </>
            )}
        </>
    );
};

export default RegisterForm;
