const LoginPage = ({ setShowPage, setuser }) => {
    const CheckUser = () => {
        console.log(document.getElementById('userName').value);
        if (document.getElementById('userName').value != null && document.getElementById('userName').value.length > 0) {
            setShowPage(true);
            setuser(document.getElementById('userName').value);
            console.log('ok');
        }

    }
    return (
        <>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center",marginTop: "10%"}}>
                <div class="card text-center">
                    <div class="card-header">
                        User Details
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Enter Your Anonymous Username</h5>
                        <p class="card-text"><input type="text" id='userName'></input></p>
                        <a href="#" class="btn btn-primary" onClick={CheckUser}>Go To Chatter Box</a>
                    </div>
                    <div class="card-footer text-body-secondary">
                        Hope You Enjoy It:)
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;