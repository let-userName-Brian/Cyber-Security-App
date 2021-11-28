const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


//listening on port
app.listen(port, () => {
    console.log(`Scraping on port ${port}`);
});


app.get('/', (req, res) => {
    //set session cookie
    console.log('Cookies: ', req.cookies)
    res.send('Hello World!');
    });
    

app.get('/hacker-news', (req, res) => {
    //set session cookie
    axios("https://thehackernews.com/")
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html);
                const hackerNewsArticles = [];
                $('.story-link', html).each((i, elem) => {
                    const title = $(elem).find('h2').text();
                    const image = $(elem).find('.img-ratio').find('img').attr('data-src');
                    const date = $(elem).find('.item-label').text();
                    const link = $(elem).attr('href');
                    const body = $(elem).find('.home-desc').text();
                    //self increment id
                    const id = i + 1;
                    const article = {
                        id,
                        title,
                        image,
                        date,
                        link,
                        body
                    };
                    hackerNewsArticles.push(article);
                });
                //console.log(hackerNewsArticles);
                res.json(hackerNewsArticles);
            })
            .catch(error => {
                console.log(error);
            });
});



app.get('/web-dev-jobs',(req,res)=>{
    //res.send('Hello Brian, we are working on it!');
    axios("https://www.indeed.com/jobs?q=software%20developer%20entry%20level&l=remote&vjk=14736d1dd2c1d2ed")
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const webDevJobs = [];
        $('#mosaic-provider-jobcards', html).each((i, elem) => {
            const title = $(elem).find('span').find('.title').text();
            const company = [$(elem).find('a').find('.companyName').text()];
            const location = $(elem).find('.location').text();
            const link = 'https://www.indeed.com' + $(elem).find('a').attr('href');
            const id = i + 1;
            const job = {
                id,
                title,
                company,
                location,
                link
            };
            webDevJobs.push(job);
        });
        //console.log(webDevJobs);
        res.json(webDevJobs);
    })
    .catch(error => {
        console.log(error);
    }
    );
})

//<span title="Software Developer">Software Developer</span>