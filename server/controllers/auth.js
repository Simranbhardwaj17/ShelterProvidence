
//put in var & export
export const welcome = (req, res) => {     
    res.json({
        data: "Hello from nodejs api",
    });
};

export const preRegister = async (req, res) => {
    try{
        //catch
    } catch (err) {
        console.log(err);
        return res.json({error: "Something went wrong. Try Again!"})
    }
}
