/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "Rent your Stuff - Jmix Video Series",
  description: `A video series about how to build a real world app in the rental business with Jmix.`,
  author: "Mario David",
  siteUrl: "https://rent-your-stuff.netlify.app",
  lang: "en",
  utterances: "mariodavid/rent-your-stuff-blog",
  links: {
    github: "https://github.com/mariodavid/rent-your-stuff",
  },
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
