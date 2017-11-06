const _cloneObject = (obj: any) => {
    return Object.assign({}, obj);
}

// 计算每月的支出
const getMonthCost = (monthData: any) => {
    let newListData = _cloneObject(monthData);
    let monthList: any[] = Object.keys(_cloneObject(newListData));
    return monthList.reduce((total: number, curDay: any) => {
        return total + getDayCost(newListData[curDay]);
    }, 0);
}

// 计算每天的支出
const getDayCost = (dayList: any[]) => {
    return dayList.reduce((total: number, curFlow: any) => {
        return total + Number(curFlow.cost);
    }, 0);
}

export {
    getMonthCost,
    getDayCost
}
