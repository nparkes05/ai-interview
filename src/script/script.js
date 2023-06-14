const fetchRequest = async (role, skills) => {
    try {
        console.log(process.env.REACT_APP_API_KEY);
    //Make the prompt for the POST request
    var prompt = "Hello world"

    //Make headers
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + process.env.REACT_APP_API_KEY);

    //Body
    var raw = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ]
    });

    //request
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    //fetch
    const response = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);
    const result = await response.text();
    console.log(result);
    const myObj = JSON.parse(result);
    console.log(myObj.choices[0].message.content);
    return myObj.choices[0].message.content;
    } catch (error) {
    console.log('error', error);
  }
}

export default fetchRequest