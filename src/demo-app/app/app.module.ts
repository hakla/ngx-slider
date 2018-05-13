import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng5SliderModule } from '@local/ng5-slider';
import { AppComponent } from './app.component';
import {
  SimpleSliderComponent,
  RangeSliderComponent,
  StyledSliderComponent,
  LimitedSliderComponent,
  LimitedRangeSliderComponent,
  NoSwitchingRangeSliderComponent,
  PushRangeSliderComponent,
  SelectionBarSliderComponent,
  SelectionBarAtEndSliderComponent,
  SelectionBarFromValueSliderComponent,
  SelectionBarGradientSliderComponent,
  DynamicColorSelectionBarSliderComponent,
  DynamicPointerColorSliderComponent,
  SteppedSliderComponent,
  RightToLeftSliderComponent,
  FloatingPointSliderComponent,
  CustomDisplayFunctionSliderComponent,
  CustomCombineLabelsFunctionSliderComponent,
  CustomHtmlDisplayFunctionSliderComponent,
  AlphabetSliderComponent,
  DateSliderComponent,
  TicksSliderComponent,
  IntermediateTicksSliderComponent,
  CustomTicksSliderComponent,
  CustomTicksLegendSliderComponent,
  CustomLegendFunctionSliderComponent,
  TicksTooltipsSliderComponent,
  TicksValuesTooltipsSliderComponent,
  TicksValuesRangeSliderComponent,
  IntermediateTicksValuesRangeSliderComponent,
  DynamicTickColorSliderComponent,
  LogScaleSliderComponent,
  CustomScaleSliderComponent,
  DraggableRangeSliderComponent,
  DraggableRangeOnlySliderComponent,
  DisabledSliderComponent,
  ReadOnlySliderComponent,
  VerticalSlidersComponent,
} from './snippets';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSliderComponent,
    RangeSliderComponent,
    StyledSliderComponent,
    LimitedSliderComponent,
    LimitedRangeSliderComponent,
    NoSwitchingRangeSliderComponent,
    PushRangeSliderComponent,
    SelectionBarSliderComponent,
    SelectionBarAtEndSliderComponent,
    SelectionBarFromValueSliderComponent,
    SelectionBarGradientSliderComponent,
    DynamicColorSelectionBarSliderComponent,
    DynamicPointerColorSliderComponent,
    SteppedSliderComponent,
    RightToLeftSliderComponent,
    FloatingPointSliderComponent,
    CustomDisplayFunctionSliderComponent,
    CustomCombineLabelsFunctionSliderComponent,
    CustomHtmlDisplayFunctionSliderComponent,
    AlphabetSliderComponent,
    DateSliderComponent,
    TicksSliderComponent,
    IntermediateTicksSliderComponent,
    CustomTicksSliderComponent,
    CustomTicksLegendSliderComponent,
    CustomLegendFunctionSliderComponent,
    TicksTooltipsSliderComponent,
    TicksValuesTooltipsSliderComponent,
    TicksValuesRangeSliderComponent,
    IntermediateTicksValuesRangeSliderComponent,
    DynamicTickColorSliderComponent,
    LogScaleSliderComponent,
    CustomScaleSliderComponent,
    DraggableRangeSliderComponent,
    DraggableRangeOnlySliderComponent,
    DisabledSliderComponent,
    ReadOnlySliderComponent,
    VerticalSlidersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }