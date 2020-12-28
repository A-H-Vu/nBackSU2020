/************** 
 * Nback Test *
 **************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'nBack';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'group': '', 'survey-url': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
const taskLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(taskLoopLoopBegin, taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(((((expInfo['survey-url'] + '?id=') + expInfo['participant']) + '&group=') + expInfo['group']), ((((expInfo['survey-url'] + '?id=') + expInfo['participant']) + '&group=') + expInfo['group']));

  return Scheduler.Event.NEXT;
}


var setupClock;
var thisExp;
var win;
var event;
var shuffle;
var pi;
var sin;
var cos;
var sqrt;
var instrClock;
var instrText;
var instrResp;
var instrImg;
var trialClock;
var trialResp;
var trialSquare;
var trialFix;
var gridColor;
var gridLine1;
var gridLine2;
var gridLine3;
var gridLine4;
var gridLine5;
var gridLine6;
var gridLine7;
var gridLine8;
var endClock;
var endText;
var endResp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  // Code to fix reference errors in JS
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  document.documentElement.style.cursor = 'none';
  // Math related fixes
  pi = Math.PI;
  sin = Math.sin;
  cos = Math.cos;
  sqrt = Math.sqrt;
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instrResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instrImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instrImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trialResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trialSquare = new visual.Rect ({
    win: psychoJS.window, name: 'trialSquare', 
    width: [0.15, 0.15][0], height: [0.15, 0.15][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  trialFix = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialFix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  gridColor = [1, 1, 1];
  
  gridLine1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'gridLine1', 
    vertices: [[-[0.6, 0.6][0]/2.0, 0], [+[0.6, 0.6][0]/2.0, 0]],
    ori: 0, pos: [0, 0.3],
    lineWidth: 1.5, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  gridLine2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'gridLine2', 
    vertices: [[-[0.6, 0.6][0]/2.0, 0], [+[0.6, 0.6][0]/2.0, 0]],
    ori: 0, pos: [0, 0.096],
    lineWidth: 1.5, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  gridLine3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'gridLine3', 
    vertices: [[-[0.6, 0.6][0]/2.0, 0], [+[0.6, 0.6][0]/2.0, 0]],
    ori: 0, pos: [0, (- 0.096)],
    lineWidth: 1.5, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  gridLine4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'gridLine4', 
    vertices: [[-[0.6, 0.6][0]/2.0, 0], [+[0.6, 0.6][0]/2.0, 0]],
    ori: 0, pos: [0, (- 0.3)],
    lineWidth: 1.5, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  gridLine5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'gridLine5', 
    vertices: [[-[0.6, 0.6][0]/2.0, 0], [+[0.6, 0.6][0]/2.0, 0]],
    ori: 90, pos: [(- 0.3), 0],
    lineWidth: 1.5, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  gridLine6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'gridLine6', 
    vertices: [[-[0.6, 0.6][0]/2.0, 0], [+[0.6, 0.6][0]/2.0, 0]],
    ori: 90, pos: [(- 0.096), 0],
    lineWidth: 1.5, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  gridLine7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'gridLine7', 
    vertices: [[-[0.6, 0.6][0]/2.0, 0], [+[0.6, 0.6][0]/2.0, 0]],
    ori: 90, pos: [0.096, 0],
    lineWidth: 1.5, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -10, interpolate: true,
  });
  
  gridLine8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'gridLine8', 
    vertices: [[-[0.6, 0.6][0]/2.0, 0], [+[0.6, 0.6][0]/2.0, 0]],
    ori: 90, pos: [0.3, 0],
    lineWidth: 1.5, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -11, interpolate: true,
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'This is the end of the experiment. Thank you for your time. Please remember to return to the questionnaire to carry on with the study. Press ‘space’ to exit.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  endResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var taskLoop;
var currentLoop;
function taskLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  taskLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'taskCond.xlsx',
    seed: undefined, name: 'taskLoop'
  });
  psychoJS.experiment.addLoop(taskLoop); // add the loop to the experiment
  currentLoop = taskLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTaskLoop of taskLoop) {
    const snapshot = taskLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(instrRoutineBegin(snapshot));
    thisScheduler.add(instrRoutineEachFrame(snapshot));
    thisScheduler.add(instrRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: condsFile,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function taskLoopLoopEnd() {
  psychoJS.experiment.removeLoop(taskLoop);

  return Scheduler.Event.NEXT;
}


var _instrResp_allKeys;
var instrComponents;
function instrRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instrText.setText('');
    instrResp.keys = undefined;
    instrResp.rt = undefined;
    _instrResp_allKeys = [];
    instrImg.setPos([0, 0]);
    if ((condsFile === "nBack1Cond.xlsx")) {
        instrImg.pos = [0.5, (- 0.3)];
        instrImg.image = "1back.png";
        instrText.text = "In this task you will be required to press \u2018space\u2019 if the white square appeared in the same location as the location on the last trial. For example if the square was in the left down corner on trial 1 and then it appeared in the same location on trial 2, press \u2018space\u2019. Otherwise, do not respond. Press \u2018s\u2019 to continue.";
    } else {
        if ((condsFile === "nBack2Cond.xlsx")) {
            instrImg.pos = [0.5, (- 0.15)];
            instrImg.image = "2back.png";
            instrText.text = "This is the end of 1-back trials. You are about to start 2-back trials. This means that instead of pressing \u2018space\u2019 whenever the square appears in the same position as on the position on one trial before, you are required to press \u2018space\u2019 whenever the square appears in the same position as on the position two trials before. For example if the square appeared in left down corner on trial 1, you should press \u2018space\u2019 if the square appears in the left down corner on trial 3. Press \u2018s\u2019 to continue.";
        } else {
            if ((condsFile === "nBack3Cond.xlsx")) {
                instrImg.pos = [0.5, 0];
                instrImg.image = "3back.png";
                instrText.text = "This is the end of 2-back trials. You are about to start 3-back trials. This means that instead of pressing \u2018space\u2019 whenever the square appears in the same position as on the position on two trials before, you are required to press \u2018space\u2019 whenever the square appears in the same position as on the position three trials before. For example if the square appeared in left down corner on trial 1, you should press \u2018space\u2019 if the square appears in the left down corner on trial 4. Press \u2018s\u2019 to continue.";
            } else {
                instrImg.pos = [0.5, 0];
                instrImg.image = "3back.png";
                instrText.text = "This is the end of 2-back trials. You are about to start 3-back trials. This means that instead of pressing \u2018space\u2019 whenever the square appears in the same position as on the position on two trials before, you are required to press \u2018space\u2019 whenever the square appears in the same position as on the position three trials before. For example if the square appeared in left down corner on trial 1, you should press \u2018space\u2019 if the square appears in the left down corner on trial 4. Press \u2018s\u2019 to continue.";
            }
        }
    }
    
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instrText);
    instrComponents.push(instrResp);
    instrComponents.push(instrImg);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instrRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instr'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText* updates
    if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText.tStart = t;  // (not accounting for frame time here)
      instrText.frameNStart = frameN;  // exact frame index
      
      instrText.setAutoDraw(true);
    }

    
    // *instrResp* updates
    if (t >= 0.0 && instrResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrResp.tStart = t;  // (not accounting for frame time here)
      instrResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instrResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instrResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instrResp.clearEvents(); });
    }

    if (instrResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instrResp.getKeys({keyList: ['s'], waitRelease: false});
      _instrResp_allKeys = _instrResp_allKeys.concat(theseKeys);
      if (_instrResp_allKeys.length > 0) {
        instrResp.keys = _instrResp_allKeys[_instrResp_allKeys.length - 1].name;  // just the last key pressed
        instrResp.rt = _instrResp_allKeys[_instrResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instrImg* updates
    if (t >= 0.0 && instrImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrImg.tStart = t;  // (not accounting for frame time here)
      instrImg.frameNStart = frameN;  // exact frame index
      
      instrImg.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instr'-------
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _trialResp_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    trialResp.keys = undefined;
    trialResp.rt = undefined;
    _trialResp_allKeys = [];
    trialSquare.setPos([loc1, loc2]);
    gridColor = [1, 1, 1];
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialResp);
    trialComponents.push(trialSquare);
    trialComponents.push(trialFix);
    trialComponents.push(gridLine1);
    trialComponents.push(gridLine2);
    trialComponents.push(gridLine3);
    trialComponents.push(gridLine4);
    trialComponents.push(gridLine5);
    trialComponents.push(gridLine6);
    trialComponents.push(gridLine7);
    trialComponents.push(gridLine8);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trialResp* updates
    if (t >= 0.0 && trialResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialResp.tStart = t;  // (not accounting for frame time here)
      trialResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trialResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trialResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trialResp.clearEvents(); });
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialResp.status = PsychoJS.Status.FINISHED;
  }

    if (trialResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trialResp.getKeys({keyList: ['space'], waitRelease: false});
      _trialResp_allKeys = _trialResp_allKeys.concat(theseKeys);
      if (_trialResp_allKeys.length > 0) {
        trialResp.keys = _trialResp_allKeys[_trialResp_allKeys.length - 1].name;  // just the last key pressed
        trialResp.rt = _trialResp_allKeys[_trialResp_allKeys.length - 1].rt;
      }
    }
    
    
    // *trialSquare* updates
    if (t >= 0.0 && trialSquare.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialSquare.tStart = t;  // (not accounting for frame time here)
      trialSquare.frameNStart = frameN;  // exact frame index
      
      trialSquare.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialSquare.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialSquare.setAutoDraw(false);
    }
    
    // *trialFix* updates
    if (t >= 1.0 && trialFix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialFix.tStart = t;  // (not accounting for frame time here)
      trialFix.frameNStart = frameN;  // exact frame index
      
      trialFix.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialFix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialFix.setAutoDraw(false);
    }
    if (((corrAns === "space") && (trialResp.keys === "space"))) {
        gridColor = [(- 1.0), 1.0, (- 1.0)];
    }
    if (((! (corrAns === "space")) && (trialResp.keys === "space"))) {
        gridColor = [1.0, (- 1.0), (- 1.0)];
    }
    
    
    // *gridLine1* updates
    if (t >= 0.0 && gridLine1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridLine1.tStart = t;  // (not accounting for frame time here)
      gridLine1.frameNStart = frameN;  // exact frame index
      
      gridLine1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gridLine1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gridLine1.setAutoDraw(false);
    }
    
    if (gridLine1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      gridLine1.setFillColor(new util.Color(gridColor));
      gridLine1.setLineColor(new util.Color(gridColor));
    }
    
    // *gridLine2* updates
    if (t >= 0.0 && gridLine2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridLine2.tStart = t;  // (not accounting for frame time here)
      gridLine2.frameNStart = frameN;  // exact frame index
      
      gridLine2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gridLine2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gridLine2.setAutoDraw(false);
    }
    
    if (gridLine2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      gridLine2.setFillColor(new util.Color(gridColor));
      gridLine2.setLineColor(new util.Color(gridColor));
    }
    
    // *gridLine3* updates
    if (t >= 0.0 && gridLine3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridLine3.tStart = t;  // (not accounting for frame time here)
      gridLine3.frameNStart = frameN;  // exact frame index
      
      gridLine3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gridLine3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gridLine3.setAutoDraw(false);
    }
    
    if (gridLine3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      gridLine3.setFillColor(new util.Color(gridColor));
      gridLine3.setLineColor(new util.Color(gridColor));
    }
    
    // *gridLine4* updates
    if (t >= 0.0 && gridLine4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridLine4.tStart = t;  // (not accounting for frame time here)
      gridLine4.frameNStart = frameN;  // exact frame index
      
      gridLine4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gridLine4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gridLine4.setAutoDraw(false);
    }
    
    if (gridLine4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      gridLine4.setFillColor(new util.Color(gridColor));
      gridLine4.setLineColor(new util.Color(gridColor));
    }
    
    // *gridLine5* updates
    if (t >= 0.0 && gridLine5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridLine5.tStart = t;  // (not accounting for frame time here)
      gridLine5.frameNStart = frameN;  // exact frame index
      
      gridLine5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gridLine5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gridLine5.setAutoDraw(false);
    }
    
    if (gridLine5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      gridLine5.setFillColor(new util.Color(gridColor));
      gridLine5.setLineColor(new util.Color(gridColor));
    }
    
    // *gridLine6* updates
    if (t >= 0.0 && gridLine6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridLine6.tStart = t;  // (not accounting for frame time here)
      gridLine6.frameNStart = frameN;  // exact frame index
      
      gridLine6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gridLine6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gridLine6.setAutoDraw(false);
    }
    
    if (gridLine6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      gridLine6.setFillColor(new util.Color(gridColor));
      gridLine6.setLineColor(new util.Color(gridColor));
    }
    
    // *gridLine7* updates
    if (t >= 0.0 && gridLine7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridLine7.tStart = t;  // (not accounting for frame time here)
      gridLine7.frameNStart = frameN;  // exact frame index
      
      gridLine7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gridLine7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gridLine7.setAutoDraw(false);
    }
    
    if (gridLine7.status === PsychoJS.Status.STARTED){ // only update if being drawn
      gridLine7.setFillColor(new util.Color(gridColor));
      gridLine7.setLineColor(new util.Color(gridColor));
    }
    
    // *gridLine8* updates
    if (t >= 0.0 && gridLine8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gridLine8.tStart = t;  // (not accounting for frame time here)
      gridLine8.frameNStart = frameN;  // exact frame index
      
      gridLine8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gridLine8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gridLine8.setAutoDraw(false);
    }
    
    if (gridLine8.status === PsychoJS.Status.STARTED){ // only update if being drawn
      gridLine8.setFillColor(new util.Color(gridColor));
      gridLine8.setLineColor(new util.Color(gridColor));
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trialResp.keys', trialResp.keys);
    if (typeof trialResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trialResp.rt', trialResp.rt);
        }
    
    trialResp.stop();
    return Scheduler.Event.NEXT;
  };
}


var _endResp_allKeys;
var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    endResp.keys = undefined;
    endResp.rt = undefined;
    _endResp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(endText);
    endComponents.push(endResp);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }

    
    // *endResp* updates
    if (t >= 0.0 && endResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endResp.tStart = t;  // (not accounting for frame time here)
      endResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endResp.clearEvents(); });
    }

    if (endResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = endResp.getKeys({keyList: ['space'], waitRelease: false});
      _endResp_allKeys = _endResp_allKeys.concat(theseKeys);
      if (_endResp_allKeys.length > 0) {
        endResp.keys = _endResp_allKeys[_endResp_allKeys.length - 1].name;  // just the last key pressed
        endResp.rt = _endResp_allKeys[_endResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  document.documentElement.style.cursor = 'auto';
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
