"use strict";(self.webpackChunkbeccalia_development_blog=self.webpackChunkbeccalia_development_blog||[]).push([[678],{9535:function(e,t,l){var i=l(7294),a=l(5444),c=l(6125);t.Z=function(){var e,t,n=(0,a.useStaticQuery)("3008643779"),r=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social;return i.createElement("div",{className:"bio"},i.createElement(c.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(1550)}),(null==r?void 0:r.name)&&i.createElement("p",null,"Written by ",i.createElement("strong",null,r.name)," ",(null==r?void 0:r.summary)||null," You should ",i.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"follow our Twitter")," or ",i.createElement("a",{href:(null==o?void 0:o.discord)||""}," join our Discord!")))}},7704:function(e,t,l){l.r(t);var i=l(7294),a=l(5444),c=l(9535),n=l(7198),r=l(3751);t.default=function(e){var t,l=e.data,o=e.location,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;return 0===m.length?i.createElement(n.Z,{location:o,title:s},i.createElement(r.Z,{title:"Beccalia Development Blog"}),i.createElement(c.Z,null),i.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):i.createElement(n.Z,{location:o,title:s},i.createElement(r.Z,{title:"Beccalia Development Blog"}),i.createElement(c.Z,null),i.createElement("p",null,"Pinned Post:"," ",m.filter((function(e){return e.frontmatter.pinned})).map((function(e){return i.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},i.createElement("span",{itemProp:"name"},e.frontmatter.title))}))),i.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return i.createElement("li",{key:e.fields.slug},i.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},i.createElement("header",null,i.createElement("h2",null,i.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},i.createElement("span",{itemProp:"headline"},t))),i.createElement("small",null,e.frontmatter.date)),i.createElement("section",null,i.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/65c5c4c4b824f978939472c723d880e8/e5610/profile-pic.png","srcSet":"/static/65c5c4c4b824f978939472c723d880e8/e5610/profile-pic.png 50w,\\n/static/65c5c4c4b824f978939472c723d880e8/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/65c5c4c4b824f978939472c723d880e8/d4bf4/profile-pic.avif 50w,\\n/static/65c5c4c4b824f978939472c723d880e8/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/65c5c4c4b824f978939472c723d880e8/3faea/profile-pic.webp 50w,\\n/static/65c5c4c4b824f978939472c723d880e8/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-71f481a987406c3ffea8.js.map