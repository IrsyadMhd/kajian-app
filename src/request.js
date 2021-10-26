const API_KEY = "YOUR API KEY";

const request = {
  fetchUstFiranda: `/?key=${API_KEY}&part=snippet&channelId=UCm44PmruoSbuNbZn7jFeXUw&maxResults=5&order=date`,
  fetchUstNuzul: `/?key=${API_KEY}&part=snippet&channelId=UCZHbLWGrq43F0-5Ef37CpWQ&maxResults=5&order=date`,
  fetchYufid: `/?key=${API_KEY}&part=snippet&channelId=UCX-4mrOc5r691SzDhHtkOgw&maxResults=5&order=date`,
  fetchUstElvi: `/?key=${API_KEY}&part=snippet&channelId=UCrmL9t3kaCuNtZII1AgQVXA&maxResults=5&order=date`,
  fetchRodjaTv: `/?key=${API_KEY}&part=snippet&channelId=UCP-tWGFUAmVWFz4XyHDz07A&maxResults=5&order=date`,
};

export default request;
