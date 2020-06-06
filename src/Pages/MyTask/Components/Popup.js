import React from 'react';

const Popup = props => {

    const styles = {
        popupWrapper : {
            position: "fixed",  
            width: "100%",  
            height: "100%",  
            top: "0",  
            left: "0",  
            right: "0",  
            bottom: "0",  
            margin: "auto",  
            backgroundColor: "rgba(0,0,0, 0.5)",
            zIndex: "100001",
            display : "flex"
        },
        popup : {
            margin: "auto",  
            borderRadius: "20px",  
            background: "white",
            padding: "30px",
            minMidth: "300px",
            width: "400px",
        },
        popupHeading :
        {
            color: "#803588",
        },
        p :
        {
            color: "#34444c",
            textTransform: "none",
            fontSize: "15px",
            margin: "0",
            cursor: "text",
            fontWeight: "400"
        },
        closeWrapper : {
            textAlign: "right",
            float: "right"
        },
        closeImg : {
            cursor: "pointer",
            fontSize: "30px"
        }
    }
    return (
        <div style={styles.popupWrapper}>
            <div style={styles.popup}>
                <div style={styles.closeWrapper}>
                    <div width="20" style={styles.closeImg} onClick={props.setShowPopup}>
                        &times;
                    </div>
                </div>
                <h4 style={styles.popupHeading}>Task Details</h4>
                <p style={styles.p}>Task Name : Task 1</p>
                <p style={styles.p}>Task Competed : 66%</p>                               
            </div>
        </div>
    )
}
export default Popup
