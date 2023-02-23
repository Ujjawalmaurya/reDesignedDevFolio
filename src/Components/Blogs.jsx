import React from 'react'
import BlogsCard from '../Cards/BlogsCard'
import array from '../images/blogs/array.png'
import css_box from '../images/blogs/css-box.png'
import css_position from '../images/blogs/css-position.png'
import css_selector from '../images/blogs/css-selector.png'
import flutter_stripe from '../images/blogs/flutter-stripe.png'
import html_elements from '../images/blogs/html-elements.png'
import md from '../images/blogs/md.png'
import tailwind from '../images/blogs/tailwind.png'
import git from '../images/blogs/git.jpg'
import interview from '../images/blogs/interview.png'

function Blogs() {
    return (
        <section id="blog" className="blog-mf sect-pt4 route">
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
            <div className="title-box text-center">
                <h3 className="title-a">
                Blog
                </h3>
                <p className="subtitle-a">
                I like to write some blogs.
                </p>
                <div className="line-mf"></div>
            </div>
            </div>
        </div>
        <div className="row">
            <BlogsCard title='Stripe Payments in Flutter' image={flutter_stripe} category='Coding App Payment Stripe Flutter'/>

            <BlogsCard title='HTML Elements' description='' image={html_elements} href='https://ujjawalmauryaum.hashnode.dev/html-elements' category='Coding Web HTML'  />

            <BlogsCard title='CSS Box Model' description='' image={css_box} href='https://ujjawalmauryaum.hashnode.dev/css-box-model' category='Coding Web'/>

            <BlogsCard title='JavaScript Interview Cheatsheet' description='' image={interview} href='https://ujjawalmauryaum.hashnode.dev/javascript-interview-preparation-cheatsheet' category='Coding Web Js' />

            <BlogsCard title='Getting Started with Tailwind CSS' description='' image={tailwind} href='https://ujjawalmauryaum.hashnode.dev/getting-started-with-tailwind-css' category='Coding CSS Web' />

            <BlogsCard title='Array -JavaScript' description='' image={array} category='Js Coding Web'/>

            <BlogsCard title='CSS Selectors' description='' image={css_selector} href='https://ujjawalmauryaum.hashnode.dev/css-selectors' category='Coding Web'/>

            <BlogsCard title='Markdown.md' description='' image={md} href='https://ujjawalmauryaum.hashnode.dev/markdownmd' category='Structure Document'/>

            <BlogsCard title='Basics of Git' description='' image={git} href='https://ujjawalmauryaum.hashnode.dev/basics-of-git' category='Coding VCS Git Github'/>

            <BlogsCard title='CSS Positions' description='' image={css_position} href='https://ujjawalmauryaum.hashnode.dev/css-positions' category='Web CSS'/>
        </div>
        </div>
    </section>
    )
}

export default Blogs