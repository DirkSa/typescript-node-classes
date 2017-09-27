import Twit = require('twit');

const client = new Twit({
  consumer_key: 'p3LQctQnbeUFdRvpFdBo4YF3S',
  consumer_secret: 'ekvSBh4pCuVFWi5sixOLKTbEqRVEMxkF076TlxV7jycB0MgXMo',
  access_token: '18367469-ZaInF8iAflrSJl1OFCtFMYPTu5aCFwFFDO01HCE9W',
  access_token_secret: 'f2ad146UxI7aL9OAxjyvschoi3VC66UTEU70McG8uTOxS'
});

client.get('statuses/user_timeline', { count: 10 })
.then((result: any): Twit.Twitter.Status[] => result.data as Twit.Twitter.Status[])
.then((tweets) => {
  tweets.forEach((tweet:any) => console.log(tweet.text));
});
