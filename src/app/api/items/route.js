export async function GET(){
    //get access token
    const token=await getToken();
    console.log(token);
    //get data from tdx api 
    
    if(token){
        const apiData=await fetchData(token);
        return Response.json(apiData);
    }
    else{
        return Response.json(
            {error:'Failed to retrieve access token'},
            {status:401}
        );
        
    }
}

async function getToken(){
    const authUrl = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
    const params = new URLSearchParams();
    params.append('grant_type','client_credentails');
    params.append('client_id',process.env.TDX_CLIENT_ID);
    params.append('client_secret',process.env.TDX_CLIENT_SECRET);

    try {
        const response = await fetch(authUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body:params,
        });

        if(response.ok){
            const data=await response.json();

        }
        else{
            console.error("Error fething token:",response.status);
        }
    }catch(error){
        console.log('Error fetching token:',error);
    }
}
async function fetchData(token){
    const apiUrl='https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty';
    try {
        const response = await fetch(apiUrl,{
            method:'GET',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type':'application/json',
            },
        });
        if(response.ok){
            const data=await response.json();
            console.log(JSON.stringify(data));
            return data;
        }
        else{
            console.error('Error fething token:',response.statusText);
        }
    }
    catch(error){
        console.log('Error fetching token:',error);
    }
}