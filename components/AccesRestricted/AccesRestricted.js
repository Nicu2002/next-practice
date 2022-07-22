
export const AccesRestricted = () => {
    const styles = {
        display: "flex",
        alignItems: "center",
        marginLeft: "50%",
        marginTop: "10vh",
        transform: "translateX(-50%)",
        width: "max-content"
    } 
    return(
        <div id="acces-restricted" style={styles}>
            <h2 style={{marginRight: "30px"}}>Acces restricted!</h2>
            <img src={confidential} alt="restricted" />
        </div>
    );
}