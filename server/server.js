// module.exports = {
//     checkSignin:(req,res,next)=>{
//         if (!req.session.user) {
//             req.flash('error','未登录');
//             return res.redirect('/signin');//返回登陆页
//         }
//         next();
//     },
//     checkNotLogin:(req,res,next)=>{
//         if (req.session.user) {
//             req.flash('error','已登陆');
//             return res.redirect('back')//返回
//         }
//         next();
//     }
    
// }
