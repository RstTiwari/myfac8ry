import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AutoComplete, Modal, Select } from "antd";
import { BiLock } from "react-icons/bi";
import customerArea1 from "../../Assets/coustmerarea1.png";
import customerArea2 from "../../Assets/coustmerarea2.png";
import customerArea3 from "../../Assets/coustmerarea3.png";
import AlertDialogue from "../../Comman/AlertDialogue"
import SignInForm from "../../Form/SigninForm";
import ModalProvider from "../../Context/ModalProvider";
const Coutomerarea = () => {
    const [selectFile, setSelectFile] = useState<File | null>(null);
    const [material, setMaterial] = useState<any>("")
    const [showModal, setShowModal] = useState(false)
    const hideModal = () => {
        setShowModal(!showModal)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectFile(e.target.files[0]);
        } else {
            setSelectFile(null);
        }
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (selectFile && material) {
        } else {
            return AlertDialogue("warning", "Please Select File and Material")
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
            padding: "40px 16px 16px",
            border: "1px dashed #22b378",
            backgroundColor: "#f5faff",
        },
        coustmerareaImages: {
            marginBottom: "32px",
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
            fontSize: "13px",
            lineHeight: "18px",
            fontWeight: 600,
        },
        input: {
            paddingLeft: "70px",
            marginTop: "10px",
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
                        <img alt="coustmerarea1" src={customerArea1} style={styles.image} />
                        <img alt="coustmerarea2" src={customerArea2} style={styles.image} />
                        <img alt="coustmerarea3" src={customerArea3} style={styles.image} />
                    </div>
                    <div style={styles.title}>
                        <h2 style={styles.titleHeading}>Upload your models</h2>
                        <div>
                            <p style={styles.titleText}>
                                Uploading CADs is the best way to get an instant quote
                                <span>
                                    <AiOutlineExclamationCircle />
                                </span>
                            </p>
                        </div>

                        <input
                            onChange={handleFileChange}
                            type="file"
                        />
                        <AutoComplete placeholder={"Type Or Choose Material"}
                            style={{ width: 300, marginTop: 10 }}
                            value={material}
                            onChange={(char) => setMaterial(char)}
                            onSelect={(value, label) => setMaterial(label.label)}
                            options={[
                                { "label": "Aluminum 6061", "value": "aluminum_6061" },
                                { "label": "Copper 101", "value": "copper_101" },
                                { "label": "Copper 260", "value": "copper_260" },
                                { "label": "Copper 360", "value": "copper_360" },
                                { "label": "Copper C110", "value": "copper_c110" },
                                { "label": "O1 Tool Steel", "value": "o1_tool_steel" },
                                { "label": "Stainless Steel 15-5", "value": "stainless_steel_15_5" },
                                { "label": "Stainless Steel 17-4", "value": "stainless_steel_17_4" },
                                { "label": "Stainless Steel 18-8", "value": "stainless_steel_18_8" },
                                { "label": "Stainless Steel 303", "value": "stainless_steel_303" },
                                { "label": "Stainless Steel 316/316L", "value": "stainless_steel_316_316l" },
                                { "label": "Stainless Steel 410", "value": "stainless_steel_410" },
                                { "label": "Stainless Steel 416", "value": "stainless_steel_416" },
                                { "label": "Stainless Steel 420", "value": "stainless_steel_420" },
                                { "label": "Stainless Steel 440C", "value": "stainless_steel_440c" },
                                { "label": "Steel 1018", "value": "steel_1018" },
                                { "label": "Steel 1215", "value": "steel_1215" },
                                { "label": "Steel 4130", "value": "steel_4130" },
                                { "label": "Steel 4140", "value": "steel_4140" },
                                { "label": "Steel 4140PH", "value": "steel_4140ph" },
                                { "label": "Steel 4340", "value": "steel_4340" },
                                { "label": "Zinc Alloy", "value": "zinc_alloy" }
                            ]
                            }

                        />
                        <button style={styles.button} onClick={handleSubmit}>
                            GET QUOTATION!
                        </button>

                        <div>
                            <p style={styles.secureText}>
                                <BiLock className="fa__lock" /> All uploads are secure and confidential
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
