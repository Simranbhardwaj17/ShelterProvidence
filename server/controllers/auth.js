
//put in var & export
export const welcome = (req, res) => {     
    res.json({
        data: "Hello from nodejs api",
    });
};

export const preRegister = async (req, res) => {
    //create jwt with email and password then email as clickable link
    //only ehwn user click on that email link, reg complete
    try{
        console.log(req.body);

        const emailSent = true;

        if(emailSent) {
            return res.json({ok: true });
        } else{
            return res.json({ok: false});
        }
    } catch (err) {
        console.log(err);
        return res.json({error: "Something went wrong. Try Again!"});
    }
}
