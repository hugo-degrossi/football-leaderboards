import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { themes } from "../constants/themes";

@Injectable({
    providedIn: "root"
})

export class ThemeService {
    private activeThemeSubject = new BehaviorSubject<string | undefined>(undefined);

    activeTheme$ = this.activeThemeSubject.asObservable();

    get activeTheme(): string | undefined {
        return this.activeThemeSubject.getValue();
    }

    get themeNames(): string[] {
        return Object.keys(themes);
    }

    set(themeName: string): void {
        if (
            this.activeTheme === themeName ||
            !this.themeNames.includes(themeName)
        ) {
            return;
        }

        this.activeThemeSubject.next(themeName);
        document.documentElement.classList.remove(...Object.values(themes));
        document.documentElement.classList.add(themes[themeName]);
    }
}