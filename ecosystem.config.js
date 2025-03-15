module.exports = {
    apps: [{
        name: 'subito-scraper',
        cmd: 'subito-searcher.py',
        args: '--daemon --delay 10',
        autorestart: true,
        interpreter: 'python3'
    }]
};