interface Student {
    name: string;
    avgMark: number;
}

interface Statistics {
    avgMark: number;
    highestMark: string;
    lowestMark: string;
}

function getStatistics(marks: Student[]): Statistics{
    const statistic = {} as Statistics;
    statistic.avgMark = marks.reduce((sum,e) => sum + e.avgMark,0) / marks.length;
    statistic.highestMark = marks.reduce(
        (prev,current) => {
            return (prev.avgMark > current.avgMark) ? prev : current
        }
    ).name;
    statistic.lowestMark = marks.reduce(
        (prev,current) => {
            return (prev.avgMark < current.avgMark) ? prev : current
        }
    ).name;
    return statistic;
}

const testMarks = [{
    name: 'Vasya',
    avgMark: 3.75,
}, {
    name: 'Lena',
    avgMark: 4.89
}]

console.log(getStatistics(testMarks))
