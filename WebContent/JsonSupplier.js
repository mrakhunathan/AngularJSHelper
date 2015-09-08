function getMeAJson()
{
	var jsonParse = [];
    var jsonData = '[{"SystemID":"192.168.1.12","PCName":"Roopesh Ramesh"},{"SystemID":"192.168.1.90","PCName":"Mukesh Ambani"},{"SystemID":"192.168.44.144","PCName":"Ian Bell"},{"SystemID":"192.168.82.23","PCName":"Venkat Prabhu"}]';
    jsonParse = JSON.parse(jsonData);
    return jsonParse;
}