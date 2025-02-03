import React, { useState } from "react";
import * as ai from "react-icons/ai";
import {
    AutoComplete,
    Modal,
    Select,
    Row,
    Typography,
    Upload,
    Button,
} from "antd";
import { BiLock, BiUpload } from "react-icons/bi";
import customerArea1 from "../../assets/coustmerarea1.png";
import customerArea2 from "../../assets/coustmerarea2.png";
import customerArea3 from "../../assets/coustmerarea3.png";
import AlertDialogue from "../../Comman/AlertDialogue";
import SignInForm from "../../Form/SigninForm";
import AuthService from "../../Class/AuthClass";
import ModalProvider from "../../Context/ModalProvider";
import { LocalStorageHelper } from "../../Class/LocalstorageHelper";
import { UploadFile } from "antd/es/upload/interface";
import { DeleteOutline } from "@mui/icons-material";
import { NavigationHelper } from "../../Class/Navigator";

const { Text } = Typography;
const Coutomerarea = () => {
    const [selectFile, setSelectFile] = useState<UploadFile[]>([]);
    const [material, setMaterial] = useState<any>({ label: "", value: "" });
    const [process, setProcess] = useState<any>({ label: "", value: "" });
    const [showModal, setShowModal] = useState(false);
    const hideModal = () => {
        setShowModal(!showModal);
    };

    const handleFileChange = (info: any) => {
        setSelectFile(info.fileList); // Directly use fileList to store files
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (selectFile && material) {
            let token = LocalStorageHelper.getToken("token");
            if (token) {
                let data = new FormData();

                selectFile.forEach((file: any) => {
                    data.append("attachments[]", file.originFileObj);
                });

                data.append("to", LocalStorageHelper.get("email"));
                data.append("from", "iamrrt2121@gmail.com");
                data.append("customer", LocalStorageHelper.get("tenantId"));

                // Ensure material and process values are properly defined
                if (material && material.value) {
                    data.append("material", material.value);
                } else {
                    console.error("material value is missing.");
                }

                if (process && process.value) {
                    data.append("process", process.value);
                } else {
                    console.error("process value is missing.");
                }
                data.append("sub", `Enquiry for ${process.label}`);
                data.append(
                    "content",
                    `Dear ${LocalStorageHelper.get(
                        "name"
                    )}thanks allot for using Myfac8ry.com . We have received Your Enquiry you will get Quote ASAP`
                );
                let response = await new AuthService().createEnquiry(data);
                if (response.success) {
                    NavigationHelper.navigateTo("/home");
                } else {
                    return AlertDialogue("error", response.message);
                }
            } else {
                setShowModal(!showModal);
            }
        } else {
            return AlertDialogue("warning", "Please Select File and Material");
        }
    };

    const styles = {
        coustmerarea: {
            width: "100%",
            height: "100%",
            position: "absolute" as "absolute",
            background: "#f0f2f5",
            padding: "100px 0px 0px 0px",
        },
        coustmerareaContainer: {
            display: "flex",
            flexDirection: "column" as "column",
            alignItems: "center",
            justifyContent: "flex-start",
            border: "1px dashed #22b378",
            backgroundColor: "#f5faff",
        },
        coustmerareaImages: {
            marginBottom: "10px",
        },
        image: {
            width: "auto",
            height: "100px",
            padding: "10px",
        },
        title: {
            display: "flex",
            flexDirection: "column" as "column",
            alignItems: "center",
        },
        titleHeading: {
            margin: "0",
            color: "#45505a",
            fontSize: "24px",
            lineHeight: "33px",
            fontWeight: 700,
        },
        titleText: {
            margin: "0",
            color: "#8c94a0",
            fontSize: "12px",
            lineHeight: "15px",
            fontWeight: 600,
        },
        input: {
            paddingLeft: "70px",
            marginTop: "20px",
            display: "flex",
            textAlign: "center" as "center",
            alignItems: "center",
        },
        button: {
            width: "calc(100% - 12px)",
            marginTop: "25px",
            marginBottom: "32px",
            color: "#fff",
            borderColor: "#4188e3",
            textShadow: "none",
            backgroundColor: " #22b378",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            fontWeight: 600,
        },
        secureText: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#8c94a0",
        },
    };

    return (
        <>
            <div style={styles.coustmerarea}>
                <div style={styles.coustmerareaContainer}>
                    <div style={styles.coustmerareaImages}>
                        <img
                            alt="coustmerarea1"
                            src={customerArea1}
                            style={styles.image}
                        />
                        <img
                            alt="coustmerarea2"
                            src={customerArea2}
                            style={styles.image}
                        />
                        <img
                            alt="coustmerarea3"
                            src={customerArea3}
                            style={styles.image}
                        />
                    </div>
                    <div style={styles.title}>
                        <h2 style={styles.titleHeading}>Upload your models</h2>
                        <div>
                            <p style={styles.titleText}>
                                Uploading CADs is the best way to get an instant
                                quote
                                <span>
                                    <ai.AiOutlineExclamationCircle />
                                </span>
                            </p>
                        </div>
                        <Row justify={"center"} style={{ padding: "2px" }}>
                            <Text type="success">
                                SELECT CAD FILE(*multiple)
                            </Text>
                        </Row>
                        <Row justify={"center"} style={{ marginBottom: 4 }}>
                            <Upload
                                beforeUpload={() => false}
                                fileList={selectFile}
                                onChange={handleFileChange}
                                multiple
                                showUploadList={{
                                    showRemoveIcon: true,
                                    removeIcon: (file) => (
                                        <span
                                            style={{
                                                cursor: "pointer",
                                                color: "#ff4d4f",
                                                marginLeft: "8px",
                                                padding: 20, // Space between file name and remove icon
                                            }}
                                            onClick={() =>
                                                handleFileChange({
                                                    fileList: selectFile.filter(
                                                        (f) =>
                                                            f.uid !== file.uid
                                                    ),
                                                })
                                            }
                                        >
                                            <DeleteOutline />
                                        </span>
                                    ),
                                }}
                            >
                                <Button icon={<BiUpload />}>
                                    Attach Files
                                </Button>
                            </Upload>
                        </Row>

                        <Row justify={"center"} style={{ padding: "2px" }}>
                            <Text type="success">SELECT OR TYPE MATERIAL</Text>
                        </Row>
                        <AutoComplete
                            placeholder={"Type Or Choose Material"}
                            style={{ width: 300, marginTop: 10 }}
                            value={material.label}
                            onChange={(char) =>
                                setMaterial({ labele: char, value: char })
                            }
                            onSelect={(value, label) =>
                                setMaterial({
                                    label: label.label,
                                    value: value,
                                })
                            }
                            options={[
                                {
                                    label: "Aluminum 6061",
                                    value: "aluminum_6061",
                                },
                                { label: "Copper 101", value: "copper_101" },
                                { label: "Copper 260", value: "copper_260" },
                                { label: "Copper 360", value: "copper_360" },
                                { label: "Copper C110", value: "copper_c110" },
                                {
                                    label: "O1 Tool Steel",
                                    value: "o1_tool_steel",
                                },
                                {
                                    label: "Stainless Steel 15-5",
                                    value: "stainless_steel_15_5",
                                },
                                {
                                    label: "Stainless Steel 17-4",
                                    value: "stainless_steel_17_4",
                                },
                                {
                                    label: "Stainless Steel 18-8",
                                    value: "stainless_steel_18_8",
                                },
                                {
                                    label: "Stainless Steel 303",
                                    value: "stainless_steel_303",
                                },
                                {
                                    label: "Stainless Steel 316/316L",
                                    value: "stainless_steel_316_316l",
                                },
                                {
                                    label: "Stainless Steel 410",
                                    value: "stainless_steel_410",
                                },
                                {
                                    label: "Stainless Steel 416",
                                    value: "stainless_steel_416",
                                },
                                {
                                    label: "Stainless Steel 420",
                                    value: "stainless_steel_420",
                                },
                                {
                                    label: "Stainless Steel 440C",
                                    value: "stainless_steel_440c",
                                },
                                { label: "Steel 1018", value: "steel_1018" },
                                { label: "Steel 1215", value: "steel_1215" },
                                { label: "Steel 4130", value: "steel_4130" },
                                { label: "Steel 4140", value: "steel_4140" },
                                {
                                    label: "Steel 4140PH",
                                    value: "steel_4140ph",
                                },
                                { label: "Steel 4340", value: "steel_4340" },
                                { label: "Zinc Alloy", value: "zinc_alloy" },
                            ]}
                        />
                        <Row justify={"center"} style={{ padding: "2px" }}>
                            <Text title="large" type="success">
                                SELECT PROCESS
                            </Text>
                        </Row>
                        <Select
                            placeholder={" Choose Process"}
                            style={{ width: 300, marginTop: 10 }}
                            value={process.label}
                            onSelect={(value, label) =>
                                setProcess({ label: label.label, value: value })
                            }
                            options={[
                                { label: "CNC MILLING", value: "cnc_milling" },
                                { label: "CNC TURNING", value: "cnc_turning" },
                                {
                                    label: "CNC GRINDING",
                                    value: "cnc_grinding",
                                },
                            ]}
                        />
                        <button style={styles.button} onClick={handleSubmit}>
                            GET QUOTATION!
                        </button>

                        <div>
                            <p style={styles.secureText}>
                                <BiLock className="fa__lock" /> All uploads are
                                secure and confidential
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ModalProvider showModal={showModal} hideModal={hideModal}>
                <SignInForm hideModal={hideModal} />
            </ModalProvider>
        </>
    );
};

export default Coutomerarea;
