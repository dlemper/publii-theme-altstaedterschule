module.exports = {
    postByTitle: function (postTitle, content) {
        return content.data.website.contentStructure.posts.find(post => post.title === postTitle);
    },
    postsByTitle: function (postTitles, content) {
        const titles = postTitles.split(',');
        return content.data.website.contentStructure.posts.filter(post => titles.includes(post.title));
    }
};
