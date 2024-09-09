/* eslint-disable @typescript-eslint/no-explicit-any */
export const generateTimePeriodAggregation = (timePeriod: string): any[] => {
    let groupId = {};

    switch (timePeriod) {
        case 'day':
            groupId = { $dateToString: { format: '%Y-%m-%d', date: "$date" } };
            break;
        case 'week':
            groupId = {
                year: { $year: "$date" },
                week: { $week: "$date" }
            };
            break;
        case 'month':
            groupId = { $dateToString: { format: '%Y-%m', date: "$date" } };
            break;
        case 'year':
            groupId = { $year: "$date" };
            break;
        default:
            throw new Error("Invalid time period");
    }

    return [
        {
            $group: {
                _id: groupId,
                totalSales: { $sum: "$quantity" },
                salesCount: { $sum: 1 }
            }
        },
        {
            $sort: { '_id.year': 1, '_id.week': 1 }
        }
    ];
};
