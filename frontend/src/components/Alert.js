import { useContext } from "react";
import AlertContext from "../contexts/Alert/AlertContext";
import "../css/Alert.css";

const Alert = () => {

    const { alert } = useContext(AlertContext);

    return (

        <div className="alert-container">

            {alert && (

                <div
                    className={`glass-alert ${
                        alert.type === "success"
                            ? "glass-success"
                            : "glass-danger"
                    }`}
                >

                    <div className="alert-content">

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