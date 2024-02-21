var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TableDataProcessor = /** @class */ (function () {
    function TableDataProcessor() {
    }
    TableDataProcessor.prototype.getUniqueValues = function (data, attribute) {
        var uniqueValues = __spreadArray([], new Set(data.map(function (item) { return item[attribute]; })), true);
        return uniqueValues;
    };
    return TableDataProcessor;
}());
// Example usage
var tableData = [
    { MATCH_ID: 1, SEASON: 2017, CITY: 'Hyderabad', DATE: '2017-04-05', TEAM1: 'Sunrisers Hyderabad', TEAM2: 'Royal Challengers Bangalore', TOSS_WINNER: 'Royal Challengers Bangalore', TOSS_DECISION: 'field', RESULT: 'normal', WINNER: 'Sunrisers Hyderabad' },
    // Add more data entries here
];
var processor = new TableDataProcessor();
var uniqueTossWinners = processor.getUniqueValues(tableData, 'TOSS_WINNER');
console.log(uniqueTossWinners); // Output: ['Royal Challengers Bangalore', 'Rising Pune Supergiant', 'Kolkata Knight Riders', 'Kings XI Punjab', 'Delhi Daredevils']
