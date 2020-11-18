//The function "batchresponse" isn't here, so we use a fabricated value
var batchresponse = {
    Batch:{
        Sales: "23"
    }
};


public  piechartDatasets: singleDataset = [parseInt(batchresponse.Batch.Sales), 55, 23]; // convert string to number
public  pieChartLabel = ['Sales', 'Void', 'Pre-Auth'];
public  pieChartData: {piechartDatasets, pieChartLabel}; //Combining both piechartDatasets and pieChartLabel to serve into the Chart variable
public piechartType: ChartType = 'pie';
public pieChartLegend = true;       //No purpose here

public pieChartOptions = {          
    title: {
              display: true,
              text: 'The Pie Chart',
              position: 'top'
          },
    rotation: -0.5 * Math.PI,
    animation.animateScale = true
};         //Just to try


//Setting and finally showing the chart

var thePieChart = new Chart(ctx, {
    type: piechartType,
    data: pieChartData,
    options: pieChartOptions
});







import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import  * as tetra  from 'src/assets/tetra.js';

var batchresponse = {
  Batch:{
      Sales: "23"
  }
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})



export class PieChartComponent {
  export(){
    console.log("click to connect");
        var Data = { 
       'batch_totals_request' : "hi" 
      };
       var Batchtotals = tetra.service({    
          service: 'local.service.T3StatisticService',
          namespace: 'company.statisticapp'
        });
       Batchtotals.connect()
       .call('GetBatchTotals', {   
              data:Data})
        .then(   
             function(response){
            console.log("enter to response function");
                batchresponse  = JSON.parse(response.batch_totals_response);
             console.log("result is ",response.batch_totals_response);
              console.log("output is",batchresponse.Batch.Sales);
              console.log(typeof(batchresponse.Batch.Sales));
              console.log("output is",response.batch_totals_response.Batch);
              }
          )  
          .disconnect();
    };

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartData: SingleDataSet = [parseInt(batchresponse.Batch.Sales), 55, 23]; // convert string to number
  public pieChartLabels: Label[] = ['Sales', 'Void', 'Pre-Auth'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  }



  import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import  * as tetra  from 'src/assets/tetra.js';
var batchresponse;
var batchresponse2 = {
  Batch:{
      Sales: "23",
      Returns : "100",
      totals:"200"
  }
};
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  export(){
  console.log("click to connect");
       var Data = { 
       'batch_totals_request' : "hi" 
      };
      var Batchtotals = tetra.service({    
          service: 'local.service.T3StatisticService',
         namespace: 'company.statisticapp'
        });
       Batchtotals.connect()
       .call('GetBatchTotals', {   
              data:Data})
        .then(   
            function(response){
            console.log("enter to response function");
                batchresponse  = JSON.parse(response.batch_totals_response);
             console.log("result is ",response.batch_totals_response);
             console.log("output is",batchresponse.Batch.Sales);
             console.log(typeof(batchresponse.Batch.Sales));
            console.log("output is",response.batch_totals_response.Batch);
            }
          )  
          .disconnect();
    };
 public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartData: SingleDataSet = [parseInt(batchresponse.Batch.Sales), 55, 23]; // convert string to number
  public pieChartLabels: Label[] = ['Sales', 'Void', 'Pre-Auth'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  }