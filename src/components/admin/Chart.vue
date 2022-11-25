<template>
  <div id="chartContainer">
    <!-- chart1 -->
    <div class="col-12 col-md-6 col-lg-5">
      <apexchart type="line" :options="options1" :series="series1"></apexchart>
    </div>
    <!-- chart2 -->
    <div class="col-5 col-md-6 col-lg-5">
      <apexchart type="bar" :options="options2" :series="series2"></apexchart>
    </div>
    <!-- chart3 -->
    <div class="col-12">
      <div class="row" style="flex-wrap: wrap">
        <div class="col">
          <!-- series -->
          <label class="form-label" for="selectSeries">Series</label>
          <select class="form-select" id="selectSeries" v-model="series" @change="getChart3()">
            <option value="age">Age</option>
            <option value="gender">Gender</option>
            <option value="times">Frequency</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <!-- filters -->
        <div class="col">
          <label for="selectGender" class="form-label">Gender</label>
          <select id="selectGender" class="form-select" v-model="filters.gender" @change="getChart3()">
            <option></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="col">
          <label for="selectAge" class="form-label">Age</label>
          <select id="selectAge" class="form-select" v-model="filters.age" @change="getChart3()">
            <option></option>
            <option value="<18">under 18</option>
            <option value="18~27">18~27</option>
            <option value="28~40">28~40</option>
            <option value="41~50">41~50</option>
            <option value="51~60">51~60</option>
            <option value=">60">over 60</option>
          </select>
        </div>
        <div class="col">
          <label for="selectTimes" class="form-label">shopping Times</label>
          <select id="selectTimes" class="form-select" v-model="filters.times" @change="getChart3()">
            <option></option>
            <option value="Never">Never</option>
            <option value="lower than 4 times">lower than 4 times</option>
            <option value="more than 4 times">more than 4 times</option>
          </select>
        </div>
        <div class="col">
          <label for="inputExpenditure" class="form-label">expense</label>
          <div class="input-group">
            <select id="select-expense" class="form-select" v-model="filters.expense" @change="getChart3()">
              <option></option>
              <option value="0">0</option>
              <option value="0~500">0~500</option>
              <option value="501~1000">501~1000</option>
              <option value="1k~4k">1k~4k</option>
              <option value="4k~10k">4k~10k</option>
              <option value=">10k">>10k</option>
            </select>
            <div class="input-group-text">HKD</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <apexchart width="800" type="donut" :options="options3" :series="series3"></apexchart>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: 'Chart',
  setup() {
    // chart1
    const options1 = ref({});
    const series1 = ref([]);

    const getChart1 = async () => {
      var response = await fetch("/api/chart1");

      if (response.ok) {
        var expense = await response.json();

        series1.value = [{
          name: 'number of people',
          data: expense.map(a => a.count),
        }]
        options1.value = {
          xaxis: {
            categories: expense.map(a => a._id),
          },
          yaxis: {
            title: {
              text: 'number of people'
            }
          },
          title: {
            text: 'monthly expense on e-shopping'
          }
        };
      }
      else alert(response.statusText)
    }

    // chart2
    const options2 = ref({});
    const series2 = ref([]);

    const getChart2 = async () => {
      var response = await fetch("/api/chart2");

      if (response.ok) {
        var times = await response.json();

        series2.value = [{
          name: 'number of people',
          data: times.map(a => a.count)
        }]
        options2.value = {
          xaxis: {
            categories: times.map(a => a._id),
          },
          yaxis: {
            title: {
              text: 'number of people'
            }
          },
          title: { text: 'e-shopping times per month' }
        };
      }
      else alert(response.statusText)
    }

    // chart3
    const options3 = ref({});
    const series3 = ref([]);
    const filters = ref({
      gender: '',
      age: '',
      times: '',
      expense: ''
    })

    const series = ref('expense')

    const getChart3 = async () => {
      let url = "/api/chart3?series=" + series.value
      for (let key in filters.value) {
        if (filters.value[key] !== '') {
          url += '&' + key + '=' + filters.value[key]
        }
      }
      let response = await fetch(url);

      if (response.ok) {
        let datas = await response.json();
        if (datas.length === 0) alert('no such data')

        series3.value = datas.map(a => a.count);
        options3.value = { labels: datas.map(a => a._id) };
      }
      else alert(response.statusText)
    }

    onMounted(async () => {
      getChart1()
      getChart2()
      getChart3()
    });

    return {
      options1, series1,
      options2, series2,
      options3, series3, filters, series,
      getChart3
    }
  }
}
</script>
<style>
#chartContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 3px;
}
</style>