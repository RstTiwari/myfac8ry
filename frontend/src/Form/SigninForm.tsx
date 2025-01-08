import React, { useState } from "react";
import { Form, Input, Button } from "antd";

interface SignInFormProps {
    hideModal: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ hideModal }) => {
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [form] = Form.useForm();

    const handleSendOtp = () => {
        form.validateFields(["mobile"])
            .then(() => setOtpSent(true))
            .catch(() => {
                // Handle validation failure
            });
    };

    const handleSubmit = () => {
        form.validateFields()
            .then((values) => {

                hideModal();
            })
            .catch(() => {
                // Handle submission error
            });
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}
            style={{ top: "50%", left: "50%", padding: 20 }}

        >

            <Form.Item
                name="mobile"
                label="Mobile Number"
                rules={[
                    { required: true, message: "Please enter your mobile number!" },
                    { pattern: /^\d{10}$/, message: "Mobile number must be 10 digits!" },
                ]}
            >
                <Input placeholder="Enter your mobile number" maxLength={10} />
            </Form.Item>
            {otpSent && (
                <Form.Item
                    name="otp"
                    label="Enter OTP"
                    rules={[
                        { required: true, message: "Please enter the OTP!" },
                        { len: 6, message: "OTP must be 6 digits!" },
                    ]}
                >
                    <Input placeholder="Enter OTP" maxLength={6} />
                </Form.Item>
            )}
            <Form.Item>
                {!otpSent ? (
                    <Button type="text" style={{ backgroundColor: "#22b378", width: "100%" }} onClick={handleSendOtp}>
                        GET OTP
                    </Button>
                ) : (
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: "#22b378", width: "100%" }}  >
                        CONTINUE
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default SignInForm;
