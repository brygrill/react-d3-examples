import _ from 'lodash';
import moment from 'moment';

const data = {
  pie(r = 5) {
    return _.chain(r)
      .range()
      .map((v, k) => {
        return {
          date: k,
          value: _.random(100, true),
        };
      })
      .value();
  },
  cal(r = 1000) {
    return _.chain(r)
      .range()
      .map((v, k) => {
        return {
          date: moment()
            .subtract(k, 'days')
            .format('YYYY-MM-DD'),
          value: _.random(10),
        };
      })
      .value();
  },
};

export default data;
