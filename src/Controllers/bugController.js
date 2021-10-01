import bugModel from '../Models/bugModel'

export function retreiveBugs() {
  let data = [];

  data.push(new bugModel({
    _id: 23456789,
    name: 'Crash on Load',
    details: 'Crashes after 3 seconds',
    steps: 'Open application and it will crash',
    version: 'V2.0',
    assigned: 'Drew Atienza',
    creator: 'Joe Thorton',
    priority: 1,
    time: '09:43'
  }))
  data.push(new bugModel({
    _id: 23456790,
    name: 'Will not Load',
    details: 'Crashes after 3 seconds',
    steps: 'Open application and it will crash',
    version: 'V2.0',
    assigned: 'Drew Atienza',
    creator: 'Joe Thorton',
    priority: 3,
    time: '09:43'
  }))

  let sorted = data.sort((a,b) => {return a.priority - b.priority})

  return sorted;
}