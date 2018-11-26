<template>
<div class="page-contain">
    <div class="hero">
        <div class="inner">
            <div class="left">
            <img class="hero-logo" src="/home.svg" alt="logo">
            </div><div class="right">
            <h1>侠客云</h1>
            <h1>API开发文档</h1>
            <p>
                <a class="button bule" href="/guide/Start.html">开始学习</a>
                <a class="button white" href="/document/Api.html">API文档</a>
                <a class="button gray has-icon" href="https://github.com/XKSoft" target="_blank">
                <svg aria-labelledby="simpleicons-github-dark-icon" lang="" role="img" viewBox="0 0 24 24" xmlns="http//www.w3.org/2000/svg"><title id="simpleicons-github-icon" lang="en">GitHub Dark icon</title><path fill="#7F8C8D" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>

                GITHUB</a>
            </p>
            </div>
        </div>
    </div>
    <div class="highlights">
        <div class="inner">
            <div class="point">
                <h2>自由</h2>
                <p>晦涩难懂、难以实现的功能均已封装成易用的标准API，你只需像搭积木一样组合API接口，即可实现想要的功能。</p>
            </div>

            <div class="point">
                <h2>开放</h2>
                <p>创建的模块可以自由分享，亦可在模块中通过websockt、http以及数据库直连等方式与你现有的平台互联，轻松实现目标需求，而无需关系底层框架。</p>
            </div>

            <div class="point">
                <h2>支持</h2>
                <p>有任何疑问都可以在侠客云讨论组中提出，我们有经验丰富的开发工程师为你解答。</p>
            </div>
        </div>
    </div>
    <div class="box"></div>
    <div class="footer">
        <p>Copyright © 侠客软件 2018 All Rights Reserved. 粤ICP备17069054号-1</p>
    </div>
</div>
</template>

<style lang="stylus">
.page-contain
    height 100%
    display flex
    flex-direction column
    .box
        flex 1
    .hero
        padding 60px 40px 30px        
        .inner
            max-width 1280px
            margin 0 auto
            .left,.right 
                display inline-block
                vertical-align top
            .left
                width 39%
                .hero-logo
                    float right
                    height 9.125em
            .right
                width 61%
                h1
                    margin 0
                    font-size 3.2em
                    font-weight 300
                    &:first-child
                        padding-bottom 20px
                p 
                    line-height 1.5
                    .button
                        margin 1em 0
                        font-size 1.05em
                        font-weight 600
                        letter-spacing 0.1em
                        min-width 8em
                        text-align center
                        padding 0.5em 1em
                        border-radius 2em
                        display inline-block
                        transition all 0.15s ease
                        box-sizing border-box
                        border 1px solid #3facff
                        position relative                
                        &:not(last-child)
                            margin-right 1%
                    .white
                        background-color #fff
                        color #3facff
                    .bule
                        color #ffffff
                        background-color #3facff
                        border-color #3facff
                    .gray
                        background-color #f6f6f6
                        color #7f8c8d
                        border-color #f6f6f6
                        text-indent 1em
                        svg
                            position absolute
                            left 0.4em
                            top 0.25em
                            width 2em

    .highlights
        .inner
            max-width 900px
            margin 0 auto
            text-align center
            .point
                width 33%
                display inline-block
                vertical-align top
                box-sizing border-box
                padding 0 2em   
                h2
                    color #3facff
                    font-size 1.5em
                    font-weight 400
                    margin 0
                    padding 0.5em 0
                    border-bottom none
                p
                    color #7f8c8d
    .footer
        padding 40px 0
        color #9b9b9b
        background #f6f6f6
        text-align center

</style>
<style lang="stylus">
@media screen and (max-width: 900px)
    .page-contain
        .hero
            padding: 40px 40px 30px;
            .inner
                max-width 1280px
                margin 0 auto
                .left,.right 
                    text-align center
                    width 100%
                .left
                    .hero-logo
                        float none
                        margin 30px 0 15px
                .right
                    h1
                        font-size 2em
                        padding-bottom 0
                    p
                        .button
                            font-size 0.9em
                            padding: 0.5em 0.5em;
                        .white
                            background-color #fff
                            color #3facff
                        .bule
                            color #ffffff
                            background-color #3facff
                            border-color #3facff
                        .gray
                            background-color #f6f6f6
                            color #7f8c8d
                            border-color #f6f6f6
                            text-indent 1em
                            svg
                                position absolute
                                left 0.4em
                                top 0.2em
                                width 2em
        .highlights
            .inner
                max-width 900px
                margin 0 auto
                text-align center
                .point 
                    display block
                    margin 0 auto
                    width 300px
                    padding 0 40px 30px 
                h2
                    color #3facff
                    font-size 1.5em
                    font-weight 400
                    margin 0
                    padding 0.5em 0
                    border-bottom none
                p
                    color #7f8c8d    

</style>
