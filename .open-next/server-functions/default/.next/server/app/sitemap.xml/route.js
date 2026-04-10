(()=>{var e={};e.id=475,e.ids=[475],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},10974:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n,cn:()=>o});var i=r(75986),a=r(8974);function o(...e){return(0,a.QP)((0,i.$)(e))}function n(e){return e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-")}},12127:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{resolveManifest:function(){return n},resolveRobots:function(){return a},resolveRouteData:function(){return s},resolveSitemap:function(){return o}});let i=r(77341);function a(e){let t="";for(let r of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,i.resolveArray)(r.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(r.allow)for(let e of(0,i.resolveArray)(r.allow))t+=`Allow: ${e}
`;if(r.disallow)for(let e of(0,i.resolveArray)(r.disallow))t+=`Disallow: ${e}
`;r.crawlDelay&&(t+=`Crawl-delay: ${r.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,i.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function o(e){let t=e.some(e=>Object.keys(e.alternates??{}).length>0),r=e.some(e=>{var t;return!!(null==(t=e.images)?void 0:t.length)}),i=e.some(e=>{var t;return!!(null==(t=e.videos)?void 0:t.length)}),a="";for(let l of(a+='<?xml version="1.0" encoding="UTF-8"?>\n',a+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',r&&(a+=' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),i&&(a+=' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),t?a+=' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n':a+=">\n",e)){var o,n,s;a+="<url>\n",a+=`<loc>${l.url}</loc>
`;let e=null==(o=l.alternates)?void 0:o.languages;if(e&&Object.keys(e).length)for(let t in e)a+=`<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;if(null==(n=l.images)?void 0:n.length)for(let e of l.images)a+=`<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;if(null==(s=l.videos)?void 0:s.length)for(let e of l.videos)a+=["<video:video>",`<video:title>${e.title}</video:title>`,`<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,`<video:description>${e.description}</video:description>`,e.content_loc&&`<video:content_loc>${e.content_loc}</video:content_loc>`,e.player_loc&&`<video:player_loc>${e.player_loc}</video:player_loc>`,e.duration&&`<video:duration>${e.duration}</video:duration>`,e.view_count&&`<video:view_count>${e.view_count}</video:view_count>`,e.tag&&`<video:tag>${e.tag}</video:tag>`,e.rating&&`<video:rating>${e.rating}</video:rating>`,e.expiration_date&&`<video:expiration_date>${e.expiration_date}</video:expiration_date>`,e.publication_date&&`<video:publication_date>${e.publication_date}</video:publication_date>`,e.family_friendly&&`<video:family_friendly>${e.family_friendly}</video:family_friendly>`,e.requires_subscription&&`<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,e.live&&`<video:live>${e.live}</video:live>`,e.restriction&&`<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,e.platform&&`<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,e.uploader&&`<video:uploader${e.uploader.info&&` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,`</video:video>
`].filter(Boolean).join("\n");if(l.lastModified){let e=l.lastModified instanceof Date?l.lastModified.toISOString():l.lastModified;a+=`<lastmod>${e}</lastmod>
`}l.changeFrequency&&(a+=`<changefreq>${l.changeFrequency}</changefreq>
`),"number"==typeof l.priority&&(a+=`<priority>${l.priority}</priority>
`),a+="</url>\n"}return a+"</urlset>\n"}function n(e){return JSON.stringify(e)}function s(e,t){return"robots"===t?a(e):"sitemap"===t?o(e):"manifest"===t?n(e):""}},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33497:(e,t,r)=>{"use strict";r.d(t,{I:()=>l,p:()=>s});let i=`
  fragment MediaFragment on Media {
    id
    type
    format
    status
    title {
      romaji
      english
    }
    coverImage {
      extraLarge
      large
    }
    bannerImage
    episodes
    chapters
    description(asHtml: false)
    startDate {
      year
      month
      day
    }
    genres
  }
`,a=`
  query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: [MediaSort], $type: MediaType, $genre_in: [String]) {
    Page(page: $page, perPage: $perPage) {
      media(id: $id, search: $search, sort: $sort, type: $type, genre_in: $genre_in) {
        ...MediaFragment
      }
    }
  }
  ${i}
`,o=`
  query ($id: Int) {
    Media(id: $id) {
      ...MediaFragment
      relations {
        edges {
          relationType(version: 2)
          node {
            ...MediaFragment
          }
        }
      }
    }
  }
  ${i}
`;async function n(e,t){let r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:e,variables:t})};try{let e=await fetch("https://graphql.anilist.co",r);if(!e.ok)return console.error(`AniList API responded with status: ${e.status}`),{data:null};return e.json()}catch(e){return console.error("Failed to fetch from AniList:",e),{data:null}}}async function s(e={}){let{search:t,page:r=1,perPage:i=20,sort:o,type:l,genre_in:d}=e,u=await n(a,{search:t,page:r,perPage:i,sort:o,type:l,genre_in:d});return u.data&&u.data.Page&&u.data.Page.media?u.data.Page.media.filter(e=>e&&e.description):[]}async function l(e){let t=await n(o,{id:e});return t.data&&t.data.Media?t.data.Media:null}},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},95092:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>_,routeModule:()=>g,serverHooks:()=>$,workAsyncStorage:()=>y,workUnitAsyncStorage:()=>h});var i={};r.r(i),r.d(i,{default:()=>p,revalidate:()=>c});var a={};r.r(a),r.d(a,{GET:()=>v,revalidate:()=>c});var o=r(96559),n=r(48088),s=r(37719),l=r(32190),d=r(33497),u=r(10974);let c=86400;async function p(){let e=process.env.NEXT_PUBLIC_SITE_URL||"https://mztv.mn",t=[{url:e,lastModified:new Date,changeFrequency:"daily",priority:1}],r=[];try{r=await (0,d.p)({sort:["POPULARITY_DESC"],perPage:100})}catch(e){return console.error("Failed to fetch media for sitemap:",e),t}return[...t,...r.map(t=>({url:`${e}/view/${t.type.toLowerCase()}/${t.id}-${(0,u.Y)(t.title.english||t.title.romaji)}`,lastModified:new Date,changeFrequency:"weekly",priority:.8}))]}var m=r(12127);let f={...i}.default;if("function"!=typeof f)throw Error('Default export is missing in "/workspaces/free/src/app/sitemap.ts"');async function v(e,t){let{__metadata_id__:r,...i}=await t.params||{},a=!!r&&r.endsWith(".xml");if(r&&!a)return new l.NextResponse("Not Found",{status:404});let o=r&&a?r.slice(0,-4):void 0,n=await f({id:o}),s=(0,m.resolveRouteData)(n,"sitemap");return new l.NextResponse(s,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}let g=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"next-metadata-route-loader?filePath=%2Fworkspaces%2Ffree%2Fsrc%2Fapp%2Fsitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__",nextConfigOutput:"standalone",userland:a}),{workAsyncStorage:y,workUnitAsyncStorage:h,serverHooks:$}=g;function _(){return(0,s.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:h})}},96487:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[828,973,580],()=>r(95092));module.exports=i})();