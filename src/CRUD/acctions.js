function logOut () {
    const Fvalue = arguments[0];
    const Svalue = arguments[1]
    if(Fvalue){
        Svalue({in:false})
    }
    else {
        return (e)=>{console.log(e);}
    }
}
export {logOut}