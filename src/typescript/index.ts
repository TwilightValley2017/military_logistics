declare namespace January {
    enum Week {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
    }

    type firstDayOfWeek = {
        days: Week
    }
}

function whatDayIsToday(): January.Week {
    return January.Week.Monday
}