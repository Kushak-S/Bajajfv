
module.exports = {
    getReq:(req,res)=>{
        res.status(200).json({"operation_code":"1"})
    },
    postReq:(req,res)=>{
        let data = req.body.data;
        let numbers = [];
        let alaphabets = [];
        let highest_alphabet = "";
        for(const x of data){
            if(!isNaN(x)){
                numbers.push(x)
            }else if((x>="a" && x<="z") || (x>="A" && x<="Z")){
                if(highest_alphabet==""){
                    highest_alphabet = x;
                }else if(x.toLowerCase() > highest_alphabet.toLowerCase()){
                    highest_alphabet = x;
                }
                alaphabets.push(x)
            }
        }
        res.status(200).send({
            "is_success": true,
            "user_id": "saksham_yadav_30082002",
            "email" : "sy2881@srmist.edu.in",
            "roll_number":"RA2011033010156",
            "numbers": numbers,
            "alphabets": alaphabets,
            "highest_alphabet": highest_alphabet
        })
    }
}
