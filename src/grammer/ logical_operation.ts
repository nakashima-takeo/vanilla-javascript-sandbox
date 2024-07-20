const flag1 = true;
const flag2 = false;

if (flag1 || flag2){
    console.log("|| は左側がtrusyの時点で返却する。そうでない場合、右側を返却する。flag1がif文に返却されており、trusyなので、true")
}

if (flag1 && flag2){
    console.log("&& は左側がfalsyの時、その時点で返却する。そうでない場合、右側を返却する。")
}