import {By} from "@angular/platform-browser";

export function assertSelectorContainsText (selector, text, fixture, expect) {
    expect(fixture.debugElement.query(By.css(selector)).nativeElement.innerText).toContain(text);
}