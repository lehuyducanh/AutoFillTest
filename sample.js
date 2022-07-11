function getHbotEarn() {
    var options = {
        "method": "GET",
        "headers": {
            "authorization": "Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHBpcmF0aW9uIjoxNjU5MTA2Mzg2LCJjbGllbnRfaWQiOiJPTVhaSzRZNk5DOVBXTzVKVkhBWEFQNUZZMDI1WlJGUyJ9.tutzUHlhJkVPtA6ulEbf6kRlPZ7V3C-NEonGdg9AIo0>"
        }
    };
    var res = UrlFetchApp.fetch('https://api.hummingbot.io/bounty/user/private?client_id=OMXZK4Y6NC9PWO5JVHAXAP5FY025ZRFS&chart_interval=2', options);
    var content = res.getContentText();
    var json = JSON.parse(content);

    var t = json.chart_earnings.length

    var totalEarn = 0;

    var gateio = json.chart_earnings.filter(function (creature) {
        return creature.exchange == "gateio";
    })

    var j = gateio.length

    var ascendex = json.chart_earnings.filter(function (creature) {
        return creature.exchange == "ascendex";
    })

    var k = ascendex.length

    var data = []
    // Total Earn
    for (let i = 0; i < t; i++) {

        let marketEarn = json.chart_earnings[i].summary_stats.usd_payout;

        totalEarn = totalEarn + marketEarn;


    }

    data.push(totalEarn)

    // Gate Earn
    var gateEarn = 0;

    for (let i = 0; i < j; i++) {

        let marketEarn = gateio[i].summary_stats.usd_payout;

        gateEarn = gateEarn + marketEarn;

    }

    data.push(gateEarn)
    //Ascendex Earn
    var ascendexEarn = 0;

    for (let i = 0; i < k; i++) {

        let marketEarn = ascendex[i].summary_stats.usd_payout;

        ascendexEarn = ascendexEarn + marketEarn;

    }
    data.push(ascendexEarn)


    console.log(data)

    return data




}

getHbotEarn()