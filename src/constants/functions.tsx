interface reference {
  id: string;
  img: string;
  url: string;
}
export function refsDevider(allRefs: Array<reference>) {
  const refs: Array<reference[]> = [];
  let refsSection: Array<reference> = [];

  for (let index = 0; index < allRefs.length; index++) {
    refsSection.push(allRefs[index]);

    if (refsSection.length === 4 || index === allRefs.length - 1) {
      let tempIndex = refsSection.length - 1;
      while (refsSection.length < 4) {
        refsSection.push(allRefs[tempIndex]);
        tempIndex++;
      }

      refs.push(refsSection);
      refsSection = [];
    }
  }

  return refs;
}
