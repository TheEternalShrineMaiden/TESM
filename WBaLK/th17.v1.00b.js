{
    "binhacks": {
        "PIV_LIMIT_OVERWRITE1": {
            "addr": "0x4B5A2A",
            "code": "FF 25 F0FA0264"
           },
           "PIV_LIMIT_OVERWRITE2": {
            "addr": "0x4B5A30",
            "code": "90"
           },
           "NO_REWRITE_PIV.": {
            "addr": "0x4303C0",
            "code": "90 90 90 90 90"
           },
        "CURR_GRAZE_THIS_RUN": {
            "addr": "0x449FB9",
            "code": "E9 [codecave:PIV_N_SCORE_INCREASE_ON_GRAZE]"
        },
        "MAXIMUM_PIV_INGAME_REWRITE_HIJACK": {
            "addr": "0x4303C0",
            "code": "E9 [codecave:LIMIT_INCREASE]" // 20 mil
        },
        "MAXIMUM_PIV_REPLAY_WRITE_BREAK": {
            "addr": "0x44E172",  // literally just makes the mov instruction add instead, lmao
            "code": "01 41 64"   // this doesn't desync replays though
        }
    },
    "codecaves": {
        "PIV_N_SCORE_INCREASE_ON_GRAZE": {
            "code": " \
            8B 0D 0C 5A 4B 00 \
            81 05 24 5A 4B 00 E8 03 00 00 \
            83 05 FC 59 4B 00 64 \
            E9 [0x449FBF] \
            "
        },
        "LIMIT_INCREASE": {
            "code": " \
            C7 05 2C 5A 4B 00 00 94 35 77 \
            E9 [0x4303C5] \
            "
        }
    },
	"binhacks": {
		"new_cap": {
			"addr": ["Rx343e1", "Rx3454f", "Rx4b261", "Rx33f6d", "Rx33c5e", "Rx33d60", "Rx1b1d3", "Rx32160", "Rx323b2", "Rx1b04d", "Rx212a9", "Rx324e0"]
		},
		"new_cap+1": {
			"addr": ["Rx343e7", "Rx34555", "Rx4b279", "Rx33f73", "Rx33c75", "Rx33d50", "Rx1b1d8", "Rx32166", "Rx323b8", "Rx1b07f", "Rx212ae", "Rx324e5", "Rx083a0", "Rx85295", "Rx85e82", "Rx920ec"]
		}
	}
}