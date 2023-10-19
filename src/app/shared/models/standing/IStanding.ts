
export interface IStanding {
    rank: number
    team: Team
    points: number
    goalsDiff: number
    group: string
    form: string
    status: string
    description?: string
    all: All
    home: Home
    away: Away
    update: string
}

interface Team {
    id: number
    name: string
    logo: string
}

interface Goals {
    for: number
    against: number
}

interface All {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals
}

interface Home {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals
}

interface Away {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals
}

