let attacks = {
    pP:{
        trueBasePos: [0, -.1, -.1],
        trueBase: [0, 0, 0], centerMass: [8, -30, 0],
        hipJointL: [-25, 20, 0], hipJointR: [-20, -20, 0], 
        leftThighJoint: [20, 0, 0], rightThighJoint: [20, 0, 0], 
        leftCalfJoint: [0, 0, 0], rightCalfJoint: [0, 0, 0], 
        gut: [6, 0, 0], 
        leftKneeJoint: [0, 0, 0], rightKneeJoint: [0, 0, 0], 
        leftShoulderJoint: [-40, -10, 0], rightShoulderJoint: [-25, 50, 0],
        leftUpperarmJoint: [-130, -40, 0], rightUpperarmJoint: [-130, 40, 0],
        leftForearmJoint: [-12, 0, 0], rightForearmJoint: [-12, 0, 0],
        neckJoint: [0, 5, 0], headJoint: [0, 30, 0]
    }, 
    dD:{
        trueBasePos: [0, .1, 0],
        trueBase: [0, 0, 0], centerMass: [8, -30, 0],
        hipJointL: [-25, 20, 0], hipJointR: [-20, -20, 0], 
        leftThighJoint: [20, 0, 0], rightThighJoint: [20, 0, 0], 
        leftCalfJoint: [0, 0, 0], rightCalfJoint: [0, 0, 0], 
        gut: [6, 0, 0], 
        leftKneeJoint: [0, 0, 0], rightKneeJoint: [0, 0, 0], 
        leftShoulderJoint: [-40, -10, 0], rightShoulderJoint: [-25, 50, 0],
        leftUpperarmJoint: [-130, -40, 0], rightUpperarmJoint: [-130, 40, 0],
        leftForearmJoint: [-12, 0, 0], rightForearmJoint: [-12, 0, 0],
        neckJoint: [0, 5, 0], headJoint: [0, 30, 0]
    }, 
    L1:{
        trueBasePos: [0, 0, 2],
        trueBase: [0, 0, 0], centerMass: [4, -30, 0],
        hipJointL: [-25, 20, 0], hipJointR: [-20, -20, 0], 
        leftThighJoint: [20, 0, 0], rightThighJoint: [20, 0, 0], 
        leftCalfJoint: [0, 0, 0], rightCalfJoint: [0, 0, 0], 
        gut: [2, 0, 0], 
        leftKneeJoint: [0, 0, 0], rightKneeJoint: [0, 0, 0], 
        leftShoulderJoint: [-110, 0, 0], rightShoulderJoint: [-25, 50, 0],
        leftUpperarmJoint: [0, 0, 0], rightUpperarmJoint: [-130, 40, 0],
        leftForearmJoint: [0, 12, 0], rightForearmJoint: [-12, 0, 0],
        neckJoint: [0, 5, 0], headJoint: [0, 30, 0]
    },
    R1:{
        trueBasePos: [0, -1, 4],
        trueBase: [0, 0, 0], centerMass: [20, 30, 0],
        hipJointL: [-80, 0, -20], hipJointR: [20, -20, 0], 
        leftThighJoint: [30, 0, 0], rightThighJoint: [30, 0, 0], 
        leftCalfJoint: [0, -30, 0], rightCalfJoint: [20, 0, 0], 
        gut: [12, 0, 0], 
        leftKneeJoint: [0, 0, 0], rightKneeJoint: [0, 0, 0], 
        leftShoulderJoint: [-40, -10, 0], rightShoulderJoint: [-140, 30, -25],
        leftUpperarmJoint: [-130, -40, 0], rightUpperarmJoint: [0, 0, 0],
        leftForearmJoint: [-12, 0, 0], rightForearmJoint: [0, 0, 0],
        neckJoint: [0, -5, 0], headJoint: [0, -30, 0]
    },
    T1:{
        trueBasePos: [0, 0, 0],
        trueBase: [0, 0, 0], centerMass: [0, 10, 0],
        hipJointL: [0, 0, 0], hipJointR: [0, 0, 0], 
        leftThighJoint: [0, 0, 0], rightThighJoint: [0, 0, 0], 
        leftCalfJoint: [0, 0, 0], rightCalfJoint: [-30, 0, 0], 
        gut: [12, 0, 0], 
        leftKneeJoint: [0, 0, 0], rightKneeJoint: [0, 0, 0], 
        leftShoulderJoint: [0, 0, 0], rightShoulderJoint: [-180, -30, 30],
        leftUpperarmJoint: [0, 0, 0], rightUpperarmJoint: [0, 0, 0],
        leftForearmJoint: [0, 0, 0], rightForearmJoint: [0, 0, 0],
        neckJoint: [2, 0, 0], headJoint: [12, 0, 0]
    },
    T2:{
        trueBasePos: [0, 0, 0],
        trueBase: [0, 0, 0], centerMass: [0, 10, 0],
        hipJointL: [0, 0, 0], hipJointR: [0, 0, 0], 
        leftThighJoint: [0, 0, 0], rightThighJoint: [0, 0, 0], 
        leftCalfJoint: [0, 0, 0], rightCalfJoint: [0, 0, 0], 
        gut: [12, 0, 0], 
        leftKneeJoint: [0, 0, 0], rightKneeJoint: [0, 0, 0], 
        leftShoulderJoint: [0, 0, 0], rightShoulderJoint: [-180, -30, 30],
        leftUpperarmJoint: [0, 0, 0], rightUpperarmJoint: [0, 0, 0],
        leftForearmJoint: [0, 0, 0], rightForearmJoint: [0, 0, 0],
        neckJoint: [0, 0, 0], headJoint: [0, 0, 0]
    }

}

let attacks2 = {
    pP:[attacks.pP.trueBase[0], attacks.pP.centerMass[0], attacks.pP.hipJointL[0], attacks.pP.hipJointR[0],
        attacks.pP.gut[0], attacks.pP.leftKneeJoint[0], attacks.pP.rightKneeJoint[0]
    ]
}