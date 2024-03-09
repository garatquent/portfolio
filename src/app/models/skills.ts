export interface Skills {
    skill: Array<Miniskills>,
    language: Array<Language>
}

export interface Miniskills {
    name: string,
    value: Array<string>
}

export interface Language {
    name: string,
    level: string
}
