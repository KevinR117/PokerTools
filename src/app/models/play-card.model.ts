export enum PlayCard {
    Fold = 'handFold',
    Raise_Call = 'handRaiseCall',
    Raise_Fold = 'handRaiseFold',
    Raise_Broke = 'handRaiseBroke',
    Limp_Fold = 'handLimpFold',
    Limp_Call = 'handLimpCall',
    Raise_Call_Raise_Broke = "handRaiseCallRaiseBroke",
    Raise_Fold_Raise_Broke = "handRaiseFoldRaiseBroke",
    Raise_Call_Raise_4bet = "handRaiseCallRaise4bet",
    Raise_Fold_Raise_4bet = "handRaiseFoldRaise4bet",
    BVB_3bet = "handBVB3bet",
    BVB_Call = "handBVBCall",
    BVB_call_3bet = "handBVBCall3bet"
}