import { useContext } from "react";
import AlertContext from "../contexts/Alert/AlertContext";
import "../css/Alert.css";

const Alert = () => {
    const { alert } = useContext(AlertContext);

    return (
        <div className="nv-alert-container">
            {alert && (
                <div
                    className={`nv-alert ${
                        alert.type === "success"
                            ? "nv-alert-success"
                            : "nv-alert-danger"
                    }`}
                >
                    <div className="nv-alert-content">
                        <i
                            className={`fa-solid ${
                                alert.type === "success"
                                    ? "fa-circle-check"
                                    : "fa-circle-xmark"
                            }`}
                        ></i>
                        <span>{alert.message}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Alert;