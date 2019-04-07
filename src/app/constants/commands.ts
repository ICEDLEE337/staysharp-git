export const clone = (url: string) => `git clone ${url}`;
export const squash = (branch: string, trunk: string) => `git reset --soft ${branch} $(git merge-base --independent ${trunk})`;
export const branch = (ref1: string, ref2?: string) => `git branch ${ref1}${ref2 ? (' ' + ref2) : ''}`;

