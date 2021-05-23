import { DOMParser } from 'xmldom';

type SectionInfo = {
  title: string,
  content: string,
}

type SectionInfoImage = SectionInfo & {
  image: string
}

type SectionInfoColumns = { 
  title: string, 
  columns: { subtitle: string, content: string}[] 
}

const parser = new DOMParser();

export function getSections(html: string): Document[] {
  return html.split('<hr>').map(content => parser.parseFromString(content, 'text/xml'));
}

export function getSectionInfo(section: Document): SectionInfo {
  const title = section.getElementsByTagName('h2')[0];
  section.removeChild(title);
  return {
    title: title.textContent,
    content: section.toString()
  }
}

export function getSectionWitImageInfo(section: Document): SectionInfoImage {
  const info = getSectionInfo(section);
  const img = section.getElementsByTagName('img')[0];
  section.removeChild(img.parentNode.nodeName === 'figure' ? img.parentNode : img);
  return {
    title: info.title,
    content: section.toString(),
    image: img.getAttribute('src')
  }
}

export function getSectionColumnsInfo(section: Document): SectionInfoColumns {
  const info = getSectionInfo(section);
  const columns = Array.from(section.getElementsByTagName('h3')).map(c => ({
    subtitle: c.textContent,
    content: c.nextSibling.nodeName !== 'h3' ? c.nextSibling.toString() : undefined
  }));
  return {
    title: info.title,
    columns
  }
}

