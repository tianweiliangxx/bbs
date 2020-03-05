import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://67.229.93.15:12365/'

export let login = function (mobile, password) {
    return axios.post('v1/passport/login',{
        mobile: mobile,
        password: password
    })
}

export let register = function (mobile, password) {
    console.log(password)
    return axios.post('v1/passport/register',{
        mobile: mobile,
        password: password
    })
}

// 帖子列表
export let postList = function (cid=1,page=1,per_page=5) {
    return axios.get('/v1/index/post_list' + '?' + 'cid=' + cid + '&' + 'page=' + page + '&' + 'per_page=' + per_page)
}

//排行榜帖子数据
export let getUserHot = function (user_id=1) {
    return axios.get('/v1/index/get_user_hot' + '?' + user_id)
}

// 请求帖子详情
export let postDetail = function (id, userId) {
    return axios.get('/v1/post/' + id + '?' + 'user_id=' + userId)
}

// 收藏帖子
export let newsCollect = function (post_id, action, user_id) {
    return axios.get('/v1/post/news_collect' + '?' + 'post_id=' + post_id + '&' + 'action=' + action + '&' + 'user_id=' + user_id)
}

// 评论帖子或回复评论
export let newsComment = function (user_id, post_id, parent_id, comment) {
    return axios.post('/v1/post/news_comment' + '?' + 'user_id=' + user_id + '&' + 'post_id=' + post_id + '&' + 'parent_id=' + parent_id, {
        comment:comment
    })
}

// 点赞或取消赞
export let commentLike = function (user_id, action, comment_id) {
    return axios.get('/v1/post/comment_like' + '?' + 'user_id=' + user_id + '&' + 'action=' + action + '&' + 'comment_id=' + comment_id)
}

// 关注或取消关注
export let followedUser = function (user_id, action, target_id) {
    return axios.get('/v1/post/followed_user' + '?' + 'user_id=' + user_id + '&' + 'action=' + action + '&' + 'target_id=' + target_id)
}

//用户资料修改
export let baseInfo = function (user_id, nick_name, signature, gender) {
    return axios.post('/v1/profile/base_info' + '?' + 'user_id=' + user_id + '&' + 'nick_name=' + nick_name  + '&' + 'signature=' + signature  + '&' + 'gender=' + gender)
}

// 密码修改
export let passInfo = function (user_id, old_password, new_password) {
    return axios.post('/v1/profile/pass_info' + '?' + 'user_id=' + user_id + '&' + 'old_password=' + old_password + '&' + 'new_password=' + new_password)
}

// 关注列表
export let userFollow = function (user_id, page) {
    return axios.get('/v1/profile/user_follow'  + '?' + 'user_id=' + user_id + '&' + 'page=' + page)
}

// 帖子发布
export let newsRelease = function (user_id, title, digest, content, category_id,index_image) {
    console.log(user_id, title, digest, content, category_id, index_image);
    let formData = new FormData()
    formData.append("title",title)
    formData.append("digest",digest)
    formData.append("content",content)
    formData.append("category_id",category_id)
    formData.append("index_image",index_image)

    return axios.post('/v1/profile/news_release' + '?' + 'user_id=' + user_id, formData ,{ headers: { 'Content-Typ': 'application/x-www-form-urlencoded'} })
    // return axios.post('/v1/profile/user_follow' + '?' + 'user_id=' + user_id, qs.stringify({
    //     title,
    //     digest,
    //     content,
    //     category_id,
    //     index_image
    // }),{ headers: { 'Content-Typ': 'application/x-www-form-urlencoded'} })
}

// 获取帖子分类
export let getClassify = function (user_id) {
    return axios.get('/v1/profile/news_release' + '?' + 'user_id=' + user_id)
}

// 发过的帖子列表
export let userPostList = function (user_id, page=1) {
    return axios.get('/v1/profile/post_list' + '?' + 'user_id=' + user_id + '&' + 'page=' + page)
}

// 收藏帖子列表
export let Collection = function (user_id, page=1) {
    return axios.get('/v1/profile/collection' + '?' + 'user_id=' + user_id + '&' + 'page=' + page)
}

// 其他用户信息
export let otherInfo = function (user_id, other_id) {
    return axios.get('/v1/profile/other_info' + '?' + 'user_id=' + user_id + '&' + 'other_id=' + other_id)
}

// 管理登录
export let adminLogin = function (username, password) {
    let formData = new FormData()
    formData.append("username",username)
    formData.append("password",password)
    return axios.post('/v1/admin/login', formData,{ headers: { 'Content-Typ': 'application/x-www-form-urlencoded'}})
}

// 用户数量
export let userCount = function (user_id) {
    return axios.get('/v1/admin/user_count' + '?' + 'user_id=' + user_id)
}

// 用户管理
export let userList = function (user_id, page) {
    return axios.get('/v1/admin/user_list' + '?' + 'user_id=' + user_id + '&' + 'page=' + page)
}

// 帖子管理
export let adminPostList = function (user_id,page,keywords) {
    if (keywords === ''){
        console.log(3)
        return axios.get('/v1/admin/post_list' + '?' + 'user_id=' + user_id + '&' + 'page=' + page)
    }else {
        console.log(4);
        return axios.get('/v1/admin/post_list' + '?' + 'user_id=' + user_id + '&' + 'page=' + page + '&' + 'keywords=' + keywords)
    }
}

// 删除帖子
export let postDel = function (user_id, post_id) {
    return axios.get('/v1/admin/post_del' + '?' + 'user_id=' + user_id + '&' + 'post_id=' + post_id)
}