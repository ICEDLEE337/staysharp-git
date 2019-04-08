export const clone = (url: string) => `git clone ${url}`;
export const squash = ({ref1, ref2}: {ref1: string, ref2: string}) => `git reset --soft ${ref1} $(git merge-base --independent ${ref2})`;
export const branch = ({ref1, ref2}: {ref1: string, ref2?: string}) => `git branch ${ref1}${ref2 ? (' ' + ref2) : ''}`;
