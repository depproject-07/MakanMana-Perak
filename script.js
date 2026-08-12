// DATA RESTORAN / KEDAI MAKAN
const restaurants = [
    {
        id: 1,
        name: "Restoran Nasi Vanggey (Greentown)",
        category: "mamak",
        district: "Ipoh",
        isPinned: false, 
        operatingHours: "24 jam",
        desc: "Nasi kandar ikonik Ipoh yang terkenal dengan kuah campur pekat dan ayam merah berempah.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmr_39dqmJp2CJleb-A7vw4gkryQ_BfHBE7vqQW5liE6GcK1cRmBswGYRooMtxtb5fzC9PfVU5M9-mvYO0es4S6eLEkztGj7bAIC6dw8OuL0JiUdiHqE4Wc-KBgQ-V9Xfd5iw8=w243-h174-n-k-no-nu",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmie5soz0KEWzXI451e8uKPSy-0appczy1T6ox4pdeZ_gq7tG6TPBT8H2TOtwrYqsYdN7eHcusRT67c0TbebfuFBq1GqVBeWuDL0Alr9UYOG3pkFaygmQOO0mP-aUWDTPrYTwyZ0iQK_6v_=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn9yf6bj8P7UPphIaSuhuEqLFETezaTZjlEB_2YR3Vd3TtLWDaiRwBCgBEj-16-HE_szrsYPBvC0habJg9ATeR55sOKFVE7KJzoHoB_QgD7H1FO20LaGCtt5Q6bmxUlI3XDLxv3zc4twBn2=w243-h304-n-k-no-nu",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnDYCv10hfUw5qzzGmrAEgKQyH8C3nR0IvwUeRHItlKJXKAkyMt1pRRHuDQ_PULl8F0vj6C0CGSD5tA7L1Rfsbk9rljCrgyfZ21rPRIrOoxhsIlckVx-gHBrabMJo7yoJMGrjvqJL_a2AuB=w243-h174-n-k-no-nu",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl58hwcmMgX-i1VT_JuHEU86giH-_Flf1oFcTI8ueXipDU7UNTOuzGqVGaxZJlQ47AJqQPpT9CMSJJHa0Zh719v1X5UO2wow3WuIhkZen__huCUWJsVeUoaJmK8JVl-4-0ousDn8l3n1MYP=w243-h406-n-k-no-nu",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmQbHggN8Mx44mI80R2MVQJ8ACWbf1NaLVQ-6nZ1mvm3JsxVW95MbFx65q5xJ2LbUrIuuCPURqCdY4T6W69_IruiR12Y4gufcBqc81MNOTx2DCGUUA5Brq381GQEN8rzdZqhDpy2oEXjVbN=w243-h174-n-k-no-nu",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6ugT9d3r4WPWDJd94QOLVDiMDwVOJEaZ2t-eS_uE-QzSktYf1dxl-xnS4nwCE2kVzUifPVIbAdXdZCPInsInG2XY29AoQ8H7we-bsYdg4BmTgs3zQykY_7VJ-_bY23QZx4HauH_723dcb=w141-h141-n-k-no-nu"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/Lk5RaZqUzJwFnZL7A"
    },
    {
        id: 2,
        name: "Mee Daud Mat Jasak",
        category: "petang/malam",
        district: "Ipoh",
        isPinned: false, 
        operatingHours: "4:00 PM (Ahad Tutup)",
        desc: "Port legend mee kicap, mee kari dan mee sup di Ipoh sejak tahun 1970-an. Terkenal dengan kuah mee yang lazat.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnrDt3uSf3ft6SOvoBJGB5L1us9wCKJ1VHiBrEvTL-LXzWYJrO0qJ33wTthiGuoVxN2Fpdumh9VnMoC8BKDzAziZzk3KUyWEjifUzsGC1P7gleBhFoxRbK4VG6Rph21EggsyySaWj9ACUib=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9t02PZ5oUWu7Wa2QwEK9TPnM8V9bXIQjKjVIzB8ytjDTMc2HA54bde9CnXKAl2JvZcoxn2ptoTFmd_060gI1EFIXMDV4IYl6kiJLWpIIzs0Muc3IVMpExwG7460WPYHhV0pdlSjc7FOvX=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/grass-cs/ACvplmPSdIEy1M6hG17pk7Oa6DlO4Sn8Vh-3aemg389ZXjQm09QFPKsS_pCm7QNsF2_ttIeDYYJ35h-FfXshzMqgCSYM5To8WEArU6h_NZCbUwyRDOXaQxci7Yv98X6_Bnf76pXp9Glc2OPyLyqu=s1360-w1360-h1020-rw",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXnwzh4Jyg-xm04_GlZlqtx4NczcgIQPazOKdAlUfTg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cvWgfh4VypfyxgAt9hd4p5wkBxkZNUn-MWjvI_Dgng&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgG83AaXeSUjfOmkdjXLQggyKSOByf0V7gpFb9rWh-DA&s=10",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl7YUoakSG-tXcZBTAjvPjB7D2hnDb1OueJS5eWRukTmueim1rYcMu_h75RUDQOSfbm6wc35VsX1nh1oLX_O0JVOoI3P3DiRTUV5SF47XvyNglMsSQpr4GeN-sBCtE7FkxTe6JVkcCFB9pw=s1360-w1360-h1020-rw",
        ],
        googleMapsUrl: "https://maps.app.goo.gl/dqLpFiRd931RDZB47"
    },
    {
        id: 3,
        name: "Cafe Warisan Bonda Artworks Hotel",
        category: "kafe",
        district: "Ipoh",
        isPinned: false, 
        operatingHours: "7:30 AM - 12:30 AM",
        desc: "Nikmati buffet breakfast harian secara walk-in di Artworks Hotel, Ipoh! Cafe Warisan Bonda turut menyediakan perkhidmatan tempahan khas bagi sajian lunch, hi-tea dan dinner untuk group private event.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn0SlHH0c6AOSf21JqIhqY5AJzPcmxo8tOJm-feS5jHt0fx3Tmr8aqWo4y17SAxEehNcb65dq13YfMli6daIXrpDGUwMtD5L7OQ3xZ5sc1N1YC611m5LAwheYWwUGlVnk5v3YCbhQ=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLD3RxhL4fY52KtrZkqGX7yEkWhFS5mjB0wcluQvy4ybWPmHfsXLhJBE0EaK21cEvFVCJH_my0zwG1rfIq_QKKxb8aKFdWhrwu1GDG2VHMjlhyjYzc0cqGna7Ig4Ww6ok06-cc0VaIlhn5=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlSinJK7l4LXuE3Vt8C8pHDPnpCUwABuk8QgAGdxhWLcpCf1r-VGovL7I5ta74PLGFRqhOsc__x_AuF5LvLu-dt1hT6ulKvvYQyC2Ylj5WgFeE2kWMokf0Vbwmhl9aVnXMXN74Bng=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk9fNjpfcOJY9B0Svo0Shuz54MzghmHjgKcUp_1hok5NdlJ8JL51On61vFrxkDBxTpLlguk2QlS55hoHVGaNrjWfrlIyqYscsXa4ztZ3s_cDwUWj8Z64OhyayRZXWd0Rhja_75W=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd589cOXMM6NyGmm_w8C5cX7Ou_AI88w22I3OenCG4d8AHcCzbqFCmfFBTzUFlxxNeer1lOUQoTo7WG9SJmdHVyOkpeJKFu_OwunnAGgzJiO6oGEA_rWPJh6dGiVjGmTMinTk=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbDWFFpChu_HdufGmjidIHMbT1CjtfxvKJCbdRmqdoK7cXkX3OweDU6P7YPAg6GsWnyEB0hqt03sGl_gAJIZsRXiWVTpBkxo6UAcOI7XqrcK4u1YpG1Eb6VV4XEJu98kHiIyv-=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmHYIb7t8yxuljBDsnYSjCCTjubd-RJQsHxXk1ttPglYPsA30hXnpqQtJSVAuK_5YB8hYH68aDwlpKzId9VISFbX6QDlOu6uNbN2mM53tMwRdwLsUTzEtsNycEk28q7g5-tQPIeQpAA24ER=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/YvkzEKo57jAfYpqM8"
    },
    {
        id: 4,
        name: "Mee Udang Mak Jah",
        category: "tengah-hari",
        district: "Taiping",
        isPinned: false, 
        operatingHours: "12:00 PM - 10:00 PM (Rabu Tutup)",
        desc: "Mee udang galah banjir yang sangat popular kat Sepetang, Taiping. Kuah pekat mantap!",
        coverImage:  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkjcIEgaq48epxOsuIFhh1toQMdckFxOvRaB_uN8J98M0MYU_P6coNpiVBMcerxadN-UpaYN1VYZIEKaFAS8ISPwrJCz8dBGhgiHCcg4sCxFs31hXZy4Bia9n_Egfh-As9miOcAcZzOZso=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkF6Lu6qKxVuvwmPowyBooQRx1bZDy0xaPTcZ_V_AMf6-I3vdtEK3L099rOeJSRqFrT88-W50xNA_p89ObOMhZvJBBZ1fq5_ZkKd3rcR__HmRDjS8Gp0pV6XvnZ2hg3x1_vgPGxZ5geV0la=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmWtyGRcCRsComwZAjv76p__sU6m2ZwD1Y3ZZ6d82Mup_UIdJsU0NiLW9sPNh_p8fIHIj2e-oqjpdKXiTOOzREJqnwkDgh292tJvIF1VUgHs5KfTYe6JRZRPa_93JYI7Q_Vz1-BxNRx7uoZ=w141-h141-n-k-no-nu",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvV-n5CCz0cT8kqPjRs1KXblAZ-rnP-Z060FRL7pzluA&s=10",
            "https://img-global.cpcdn.com/steps/124f61144b6b26d9/400x400cq80/photo.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_W4lRFLbdJ-T3jiIoI0zk6GurJPU6wahO5pD8_EhmSs3Hq5AUnxoDFkPq&s=10",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm_2LEb5dnQ5GFazAc6iU261qP7zJJtWfrrXgHxzSlal0qOcjom7M6o-d6Td5nKF0ni2NeHItp8hxmnINQZjpZ2ls-aWQ1uGkw5PWS8U48YdpHvFFdrNv_2u6TcE9YSyF3c2M4pohb4vm6M=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/hVi5ofyE7d1a9JU69"
    },
    {
        id: 5,
        name: "Restoran Nasi Kandar An Naseem Maju",
        category: "mamak",
        district: "Taiping",
        isPinned: false,
        operatingHours: "24 Jam",
        desc: "Nasi kandar lazat dengan pelbagai jenis lauk pauk dan kuah kari power.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnhTGw2E9vu9zRfGedToS8fYDAsS9MB1Oe0sWEsjkMFKbqYh2zpNGw2voxVrE0R29lP8FJ2cz6E318xF15R3w3orEKKG2ptfO1KoFsNZeJ_C7IuDwzHxaLV1C3GuombfLd7Irc=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmGCC2mnPEAC7fzuqQ20-nb8G_4P5TZQWq0DLRRbHFbb495ZVtJafY51S6bzDa4EKH21SvdHZzVzLP7hZ4YKXgQRm09uZ5Rik1MFO6w5qDT54IXIIw8_3Bw8Hl1Dv00-pDVj8Q4TE_MQSNH=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCRlgr33mXYr2NtSUaHwWykGg0hIqOKHvr79cBb9CSFQmNUKnNhpqr9Tj0gAl2DHjycgpgJgAwRjedM7CfwL2tDSqjZ_ithcPZytmjSeY5JBOcNZOUaIAn7mx8WUoDC7MPeZtWYSEayFs=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnX6Ff5NbQF0xPgPzf5Of3XxkBWc953VwdRDwA7Ob12sNvQnV4SRYqF2yLOHshVQykMkGwnPvLTS2IbnFwFDUm0fWRJmnZU1W3koORj1_5MceUrTxFoxUW7ZhjD2YW-iFiL9I3GhSn9exn=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnwQMG_iU7L2beBfNwpJbLtPhme4em7obwoGeuMcvxkR4y2Tgi_lMgvzP8JQZGydn16PsinI2nUqTwwZO-Y0yWPkrBE3W8Pz0mGCq7t80kh-GYV4Rn0hrwh34qv-1g5_Suxfn78aQ=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCzOxleVyscI0HCnY3jqjcImsQbfIUlY2URaWeUFtrhHGf0X1KqZZBPZZG2_KGo-8cLBh5dc1iWREtr4g_8AvDyOmUpB4B6BZWnGzoDBsb9S_HtTwACLTa8Vl_lRugUjygHDrJYY492F1L=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnRYmxoN3gDXmAuq0Zi5rwrsrsk3OEYnDAuL807IM9NMSVBnlUaacO7BM9yh2Y81t1FemIZjFZKijgLPGeuFhbR7iL6MlSCJsRa64d8TIeorxhjMSIiD8grD6rBOc6dnlGyl-w=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/L2wGSAMEjW8VXhoE8"
    },
    {
        id: 6,
        name: "Ayam Gepuk Top Asia",
        category: "tengah-hari",
        district: "Batu Gajah",
        isPinned: false,
        operatingHours: "11:00 AM - 10:00 PM",
        desc: "Nasi ayam gepuk dengan sambal yang pedas, tapi sedap. Boleh refill sampai puas!",
        coverImage: "https://lh3.googleusercontent.com/proxy/Sk6Vd9pD6h5uzhMGVyj6sAJDkx1Ve3Xxfd1_UGSJiqXL256l1YqyW_Dpooi6iyMMk77Ucih73bWDd_508L8u3KcIxOkZNwmkgkvPMDQBcJlH3GcBGVZqShTt6ev8sQP-MN-Fp0rWv6KRfdoQeiK5rlRyXCwatw=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpT071JjQcKk_1s2UoW-Wx2nkgDibaRHk5ZAq-kBd25659w4HdHQnwhQXE2OyZNgJX76tj-W3jMnLNPKskPrYvtB9DoO7dHPXy0s0DG6_9gNpzW258rNyP7DpXVij3ShPesv9OKFGFkrnR=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/grass-cs/ACvplmMOP-BNGA0nRYqJf4YS-3HlaCVgrWE59sYCROvwmh3AL_RB4IkL5zNuAp9Z6QuoPLQWkIB9DHPHisydemKdo1ijf5wQKWqus2Wxm_dzVtBFBPyd0-gaPFbMfUcJBurf5WJ9v7riCeUOgL-J=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/proxy/EVI7snz_l7JV5yb2CkarBxzfh3zh91IPyivEEvvRTip7TopCH447M648MQCTcsUPTEe6BeSaBm3lK1nh4MLLCVPG1AI1P4ZEciYtHF_jyLe3YObkD9XSxExKBDkPCfnY6rOe2DHmPu6G1QNYWFugno54w3AaibY=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/proxy/MgaBjzRXSubnju-9Ppb-eSM44LpfhJqGefa3QCBoZplFTzXfVbeWaK96Ga6VyH2lPsULI2fTVaXCdjYN1Vrx_BiG__AnADR_IVmEj6QVP0w10SAxZsKK5tdLIg4QFdxlp-Nqm-XjLKXUcKp7vDU5IfPnJLQ-J7g=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn1GRIfMROZ7SD8vdOwZJHak-Iv0pdBvEcyDIiBpwSdkRm0Vhs5YJpQS21ZcrVlF0WJpeCfa05muR6hCYJ93Jt5KFyKubh00okRppwwOYcBYqY6fv1yl1KOi3EN8TqnXXE0U3yO29fQzpQx=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlT52mITBOm3dzsh79vyeCVo8Kry6RbXCLRfIM6gTw6Q5V3hUKysfqZsT0wUJtPNn4JT6LWEkozzjMw5opUAFVohTYO0YuCWtl-tTphPKw0LdZb8Hc8zc_Rfu7XeUiiLPKXETeBDTLy3o9M=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/aUoKGJ88cBCe8CbTA"
    },
    {
        id: 7,
        name: "Hirupiring Kopitiam Seri Manjung",
        category: "sarapan",
        district: "Manjung",
        isPinned: false,
        operatingHours: "8:00 AM - 5:00 PM (Jumaat Tutup)",
        desc: "Kafe dengan gaya klasik",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWntr1CDw1lHjlpEOjejP6Uuq2FVPLy9nC0BZhoxpM3itUimV2MNhvAUcc1CK6yqiFeLZJc4SuqKyEviX-CJtuor2XyS1JkV6tMPd4JorJEmiF6sxXQ9Tpg6dHTaVbHoNw1dBJHlsg=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWloAoaDX-3WOJdxGVfSWO1L8VbJ-MQVfTiuRLWme09LGID7LEJZXMgrfeRj8iESrY1tkEUEMUmq-Mdjo9ylgGwPiwVNU58OxCF6K-0g_Tkrdof0i_YFVTM8Io_pR3_b_e7mmopXH9zvL_Y=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmhsOZb3IfXrOrIUMJTqVlbFAwMJfbaWXo1q6TgzfrjgMyxLGUHxfpebnJS7JRSz0RHyMCmHJDfyucToMjIE3jTTL4soD_q0chedKu9R8VXUqEbhiaWyhoT-zItyiY5lVEOQ09s=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkY-j8sCUn0LsGvV6IOsozCO5OD3tpTdH--0_YKjmS9W79Qkn1O6sqVGZ0pLHhcBymg9QQ7ZGLtsws8O6Tj6nUVWkJE0rUJPbwXMzE9m_-8iSrkICCk3ziHa0RFszuvaeVQahOxleN5s9o=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmiNm5nhr9-s-LTMODWdiSiQImAsAyn90RfhgbKXMYauoD0vrwB2GBgoujyicfKyOQEMgmzn9JBNJdNi6sofRmISijLoDN0VBLdwVp2pjvDvsfG3RnO_wKFFxYKM7vnroKFteK5=w141-h235-n-k-no-nu",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkZPt7IzLC_XD0DYB8ixioCn2iE6sOFOTbi8wx2u1aF_GOu9ZAdvH3G2xrHy-9IUdK-ilIVrQllVVvMQdyzPLaRrHwtRcluLte6SkLbzAC6LrM33jTXWH2TxRLrRud2cauqssx3MA=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlp-gwpsGPeKI6zYiLNnBchLOhbbOKOo-Lng5Jmm4ZFR-0PhOCDdYocQpsARFof9gIsLbIPRCvI52YnB_HI4jxO5s1Kc0n_5gtvMvfC3zQS8XnUDMfcO6JOTBldAMUYGmKDUfsz6Rb3VZs=s1360-w1360-h1020-rw",
        ],
        googleMapsUrl: "https://maps.app.goo.gl/Z6xt4XyYdzeHFuKt9"
    },
    {
        id: 8,
        name: "Restoran Madinah",
        category: "mamak",
        district: "Manjung",
        isPinned: false,
        operatingHours: "6:30 AM - 12.00 AM",
        desc: "Antara restoran kegemaran ramai di Seri Manjung. Nasi kandar dengan kuah campur yang pekat dan ayam goreng rangup, mesti cuba!",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkwcY6ZyRDvt_1gTZulUbbQeLAtB5_FrTqo8peB2L_jbHaUGuVkdtuoUCeFj-Tfle0DN8SMZKwxs7ZLyRMwr-VcoaGiXLa8YezRcXLmv60t5HK-SN_TJmpzfaFs0XY9eNT1SaY5hPhaRkBG=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnWzIS0OKxiyW1LMMZ-ExTxIBq6mepZFZ8t3ZvroZ09PKpeoJTANciJd0v8ffWm59qXe6CkKjVR5yYe0ArGUVpv4jszxJcbjgJgUmhOgevbE5MVdZI4_Ksx1mEVja0Ixc5gN1lyqQBYcd-y=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmXRPiaatPvLIzKdB-PoBv-cZPwZ4vf_C4Hkj8OPwUpkeXaCOh6IrvDOkVSuMwhCNqJkzXiZdCQhKtlkYlXBn5XhJdcXgoq9cHAMLXd0cE50sUzm0L7iUN3qMu6KIEIxgcsaBxxBBG6GrrA=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm2DPyvSNDRZwe56AU9T_Q36odIWq5Pa6_ZiHfkUGZ-0NmMD1ZLhB-4tc48w7O6GWHyt74u9kB_HoD7yfgBYo28znpVJNnw242hrR4R3DWTKt9-mOsbej350s22zoTUKYTnOvxTOixuNTTv=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkxhsr1hWUCPaY0vTWOcvzjTejoKfwHnpflBUXyUxQhdGhenf1u69HpM2L7WQsv9VHSSh7qePlL31X0yU0n8HM01OqVRjYAfB5bLkr4DAZZRtraa_V67Cx6ebjFgkRWu2vrrps9Pb_-zsU=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/grass-cs/ACvplmNUNtHHNTYE0s6TLBRsjjYan9gkPCIx10-BVl-3ypORuNSVSFYs72IpzzQ0t52JPnIPOK7PNyZ6Po-7H3CRg5bFDYvWQXZ5VyGPEBJsrBsC6EMimlMSSHvfpRsyEg6sZj4a4xp9=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmBljT1LvmnDqLRcvVVfL5mGv0KK_RtgjeRsram29kWWw9ActDCXYoZnZGpUq_sj6LZ0aEiIt_Wo8AR4kMODcU66xIvKY5JQnZSNwwjcqxWe49Rn6R1dzl9ssHYsZJEvsKgqZtzmKegAbWq=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/xxqKTNGA7ji6MKEc8"
    },
    {
        id: 9,
        name: "Ate Bajang Coffee",
        category: "kafe",
        district: "Kuala Kangsar",
        isPinned: false,
        operatingHours: "6:00 PM - 2:00 AM (Isnin Tutup)",
        desc: "Kafe dengan suasana yang tenang. Layan suasana dengan pelbagai jenis air seperti latte, matcha dan makanan- makanan ringan",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1D6xo8qIuXzVvDrV5q558WVdT6f4VaGaV2D-Z3oQl1UlyIjvV3maFngq47Yu3Svsn18m-_XwfvphdWVkehuwvIZholfTrFZCl-PylWjyvsOrrLfcZqcG6GHBadPDSnSxpfhDzepbIjzU=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmcBhW3oE1W7dyaJZvnQY6uSjxXuQYjvTplAXw2H2ZlT43dVQwGV-kPoFu7mANmRQEYdo26Akljo-oECk5swwOdp682q2OBYeOVKQVqEcDohE7b9BO129FUurerV686Xu6AJ6lCfD3wyvkj=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1D6xo8qIuXzVvDrV5q558WVdT6f4VaGaV2D-Z3oQl1UlyIjvV3maFngq47Yu3Svsn18m-_XwfvphdWVkehuwvIZholfTrFZCl-PylWjyvsOrrLfcZqcG6GHBadPDSnSxpfhDzepbIjzU=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSZVome9_jKNN9H-gMuaRo5oXNadOgt3VEkcLcUBNBcBSw0wbvlZ7p3nkBn3_fidhyspiBUpb2rq2LMaOBtRJuVN7olRr-sweNhD1SVOshCBKLDzDKjdVAW788O7bk6C2bbFzdytF8YQQ=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk7y7E6BSoqMmic8IHqcY3zhiVIocsXoABCXbQXlKdz_7u3YSPjwOFNhJK02XyO5Mb4lVky3YIEH1zf0VxUXLhQOjYZL20XHDpjd2MNM2R4uoGLc3CgQ4gG1uHHYqxlr_5NzVI3MqQUhcUB=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnyCP40TXH1xaUjqJjmAghVbjRGJ7CDCAJirIq68YeP1Rbj1Wt3chFGVABb14EfmC3HIrxtz9mSR2Qy6LrMVI6ld_G4Be1e24bPMb0Ii3RaknIAuM6ZQJFOiu2Ez2Ta8dawTJuwsKunjw=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlz0nmO0vg6J0_kHcqWiag1Kj-jxOxCXmSpz8Sau127WLd1D8vZqF-e35XKY9GQMdj7ESq-15cNTlwj_h9glkVYJLcYqlfMQ6Ce54BjNXCEHWILEsEo2ANaiHPUX2gEeHx2LvpLHuxAf3NI=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/B4i9mD8c7esiRUSH7"
    },
    {
        id: 10,
        name: "The pejoi's Signature",
        category: "petang/malam",
        district: "Kuala Kangsar",
        isPinned: false,
        operatingHours: "3:30 PM - 1:30 AM",
        desc: "Port makanan Western yang popular di Kuala Kangsar. Antara makanan popular seperti Fried Chicken Chop dan Mushroom Soup",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnOlS-I35pVQatSbiC4HkY0nyIAqoVPEMsXzdl3eF5NA3XqpznC70JnuJBHg0qEW4g5gIOZ9vO6b9vU1iPVyVDh1oJBQp-voygviEjDvHrG9Jmf_QZedaKhs4-y76N71MowcKA2=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm5FXYyVT9iLkhGl9RSckjN0s0B7oURuVpzf7dXFWiUyne8waSyeUy9CzGWrgQFI53GiMlu7MWpMPfO0Ss3lOzxzotUzcw9cjhRn9IwtVv7The3Ip95Ekksf6UWrYDxlYscOWx8cg=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkHY9nEOGMQJ1qeYt-Wlr-qAsLavXHPnfPspka0HExSCnzbbd-yp2CAT1fbqPPkZZBRqUTt22WVDlDGbYEavHatHnWKmcVAW1vcx-8oLNOHhiAmOF2W2PwdxeRrtMrjPAKzoeqd=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJzP6_HpZWS9vyDHA5_aYosoEg5OvcArecGL17ye5U0siYq6jQaDs1xVEeSURK4evtHFbwY8uAmHLrTtRbGddKAdt2Ldc4SB68RBl4Sb_DTek_wDGJ_yDaTuskVEZb0JO41yY=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlE5OI095m_flRFUHkrB-JT7FpsT6H_xHv5UDx4Ejeaerd6rz0akXH6Y1XloPpW7m9qVu33T5R-FTKqoduGKfr_LWnpN_0emDwzYF1ZSu0_zl0Dci8w7_TzIw0me_G1ozwDWiy5JQ=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnHgtq4rqBTXVCwA7y5TapLFzjKudOPyRoR5mCt2qlF1W3VnS6LidsH316KpPmhLrgZSJkEN63L0xIYPkPi9mUc_K5sENRDPntC8gJv--v4bbLGV6kOyrAvbZq0VI6zbBwXqZ1j=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnEDuTRBbpejqUPtYQX0ZlIjlJZEBR4dsdCMOBlM21tuv6TXV2i6LZSJr2XCmBH7a9SYCE3qR_2vLyc9EjWVpXvZCbmzHDUJ7K0X_zg8IE8D4Olk9py-4HvmUnicRVXMM6hFm8=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/WJvvQANbr9HkoPQi8"

    },
    {
        id: 11,
        name: "DCANAI CAFE ",
        category: "sarapan",
        district: "Teluk Intan",
        isPinned: false,
        operatingHours: "7:00 AM - 12:29 PM (Selasa Tutup)",
        desc: "Kedai sarapan pagi dengan menu utamanya roti canai kosong kuah kari lamb shank.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmsN29FuAwMz3d8LcVbMLCuoJYHHehDgeTqiXef5pFQWHuqn6z-aq72K9efqDOnCH4JkOEomdvMQ897FzRRTeDPJjASsITG6G4FBO3TY9FUwp7AT0QYtTYbOSa8_IVgrXWH0p8DxI9rWYM=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkPdgoAIwv5YYk8HNZRTJtj2dt0Q_UQkCLC1i6vE2VXZh5MBUpJ6QyBqN-u_qx3FTM5lD73GqytLPu3P1wo4gyQ_feCY8tf7SgiqlCD8n3fDNkGA1qHsaNa8BSe921N3ELamtmDzA=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkUM_Dix0CbDPYVLfPAARiN3bIHlg700n55bb-3-A-6GxWkxeT0f7MTPhePy0UWVHIWCohYcELZaNPxnn1vXdHX5w7QycBm4Jc4Wa1yCjOO5qBFcFRTR0bEYKzH9z4YdDPhMcCkcmByRX8=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl59gcJdqCoZlIG3jj52FlMzY6dnVlYFXofBqA11iNvKNWQhJcMwNXWg6Fkos6Wz9JMTNCL1zy2z7viF5idJ4Q71o4CO8FMPsTHhxRmwzb69f_wMY9szRWrXeKTTt5Q-XOU553MCee7ddM=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLVCR9H2uHzCIa0sURc6gfy_BoFruZ1o7ep_VhEnKM459PYtA8fK0ZuyXRXLeNW6AMqHIUweViRV0sdVNRVwytg8tugErzwVBspCWkc6GMIO-fOUkM7te2rHdgE_6lw6ZMCiaLkbnrWLsg=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnfurQtEPh4mPN1wgkp5KmJRfK1VR6ffY6UD1R-tAML5_rmoeH27spQWA_88oufDew0sza7a9Dru8PNqRZ2GOQZA2dh2_-TbRb95EpUiN4alYBejh8bWbYJs7buLsMNMUjlmTrpczRs_MI=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWku2ouvTVlvd0Znu7hLld8XOHHKHQcybx7uvcvyXW-W6lP-lk43UKpdaCwiyJRD8KajsETmNWxGobGgErNtcu187PskPYbOL_AOXD4ARbv3pZH6zm8wLT3EO25o4BY-ixYrP9U=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/YdugEfEG9eSQwg5U7"
    },
    {
        id: 12,
        name: "Restoran Udang Galah Teluk Intan",
        category: "tengah-hari",
        district: "Teluk Intan",
        isPinned: false,
        operatingHours: "7:00 AM - 5:00 PM (Ahad Tutup)",
        desc: "Restoran makanan tengah hari dengan hidangan utama udang galah.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWka82mIflAQ7lmZyyTVwgUhXP9ZQdnHIvVN4JjkrrHF4m0ystDkvv1DY9SVP0Q6GXUjmvJ6N6gJ0AHfqr9VebUfvdhdnObdNffcK9U315pvE4_hHyasXeKnHmXaN9Xh_YuSVKlPa2dEAek=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZJAdocsmgM43EV6-60oBl5xZxsiRF0h2EZIvtG3E6FySYWk5dxsGbUQem-kbj6Riw98F1mhG_51sHwCauloge2SMoIGOt1ym4U6-1vZ794Wb49vwh76p6wRzW4zLh-n3GV3qhRA=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/grass-cs/ACvplmMBJ2z5U3CbCLUcnKWztkemxKjAeUmfMBfJ6Nu8f8WiWeNJ3JSADfRqIwRUvtL0Uvm8o4RVDFCYHy2raGP9A5AlO6UzHHEx6Ig5o2GLS8-DYdeoz2kwaKBYX83lvfLZeIHNS14f=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmoQt8CVKgdAyw6KSM43YoJ6iuzb5cZJ653cIb2S8l9Vv3wFlWyrDcMRqmeyV5DpPIJV2giY9OWT58U8HbigNiCHq2GrAyCVJQf8GCkCCSyboAaMJFaVKLwtAk9n71EKkqTnOZvpw=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm4P98xx3l5dfN7aT3jUJSUTuQn0eic_lp32JsgSpD6cJhbrv6MiIK9XKwk2OSWdr9RgOPEGQzkRlNfrmuMhzVAkwegarkyM9MQSRe9C7cerHrgm4w9yxr_1imiePQvXC838_E=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmPV-h2gToLQCTsUSQ0bFMuNyQuM69HYn_YtTluGRAgVUJDdBoOAspCjBueDfKOZjD0526FRpSbB7r-CKupJtX2caK-ytaVRAUGQbYAQ5ss9NpYRqXVd6k8sCnIoTiBhpZp1M94k_XrwaaP=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkrHu1yIwRrxva9ITbdeRvezuiIlg4VGiEzZf3hL_vqjIqN-xPd1aOUYPpLXlN0sJdY7dqQBjdsBe5iK86oi-OvgnD8GbKbMEavym3NxZV-qVr9yUYo_WLIiy1WfViNDEqxfIV9=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/BD2pf8S3qR1CUBew5"
    },
    {
        id: 13,
        name: "SR Selera Idaman",
        category: "petang/malam",
        district: "Kampar",
        isPinned: false,
        operatingHours: "4:30 PM - 12:30 AM",
        desc: "Restoran makan malam dengan pelbagai hidangan seperti nasi ayam, makanan western dan gorengan.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlkrXf9WB5lRsGY6ouPhJJIq8ypp3bmsEg2ZU0XF1wmrEBofDzPJzhbytY2qCWlq_O8h3PhM2_knBtTt1s8KDDrIUp9tKxXw64Jw60nQDbmk2zQAtf93z5b86GQ5VU4D3MWtjxcMs54MQPq=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk8YMTNKk9DhRcSMca87DGjHLZa6YCXuW7Hst7k5EG_b-N9OwZX5lSXxuBBbQL9CjHMAGmX6PpcjjBn27ZrzWaGU2cpe42tm2CQ5oQe9tp5J0NrBlGNNR8X-L9R36wgWv1EM2omgYEFvTg=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/proxy/hyXs9x2bljykCR3KVc9OM2LpE6rLMw_ECMRH_IlDVBpDKDiBK-ha6V0rtMR8C8P4x7-Dh6tbJs4m5bKTkxT_6v2xJ2SqitWq9brRnoKO1H-HvYUslRYoJII6vNXiItsjRpqDxftgCLA2nTyGb8qQBg44vEXGb2E=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/proxy/v0jddulLV27j6rfslDpREphl9TthJyRB59etmMPMqDDjeP1jmb-mDoqua9dKYw9oJc25N-LfOK3R88QfMv2i-6tyYq6VWOJyXX1p04rcOnL9TaGWb4tgdwEVivwrhP8UKxBvTSr-kSd0vnaStjmrc_b1A-P51A=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/proxy/1VG8jipT2JqydnFUUXXuplb_375FRBf-IBQKXINgZoq2nT8xsjv51A__0YJTeUcAWuV7FPHumXOyQJjM-YPDLhUxfctEwAkICq5KyfL-3Ch--dL4cMvJZRRkyG_MuvwPFFP-udoRvwh-ULEV1Y-d1zuM8OZgaw=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/proxy/dOEfZnHn-ykbW90lGHGrP111G8Uw35qFFiyTSJqj9zEyzPLwqhiWp5g02noOVzvf9zBMIXNoSJmqN6hY5SBhB1sNFzIA0rMxDkNSo2OWuNQKPF8aU_o6vlZIwiqzXV-gLlUlejGL9cwamrtIMPAe3ODmR4K0gw=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnyA-J3gtLwKTJ1PT3eRzeT7TNh4RbrvGEKN3p5DC-VgVbobASr8rDhyPqRfp8Y_GRYBr5TBBiuYdSioDWZFQ5g9fY8oOAC5V48PjyV7p5Lr6K6OIdl6xa8g4K16_Z2iacbSwWlDZWzMARP=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/ufBvnVYMdj8yqvp39"
    },
    {
        id: 14,
        name: "The Alley Concept Store",
        category: "kafe",
        district: "Kampar",
        isPinned: false,
        operatingHours: "12:00 PM - 10:00 PM",
        desc: "Kafe gaya premium di Kampar.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCDy0RLFTjiuqRdaAISqrT0AoEJGJW443OJUcAkbA4P7bQ67gJ83gDSrheekFD7DNlvcEg9bEyamDYRPppWCeGg89FGOdY1_LPKhx_Nrr4tiRFV_QUhI3pzuM2-QM8x5I-QgrvzilReKxu=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn41le0Th5NHFryihbWiXulxLUNEIBMWllxXnpSpp6BsjXx93tb6fxSa_GM-4QD-HPQzZuxvppbCCmixP9wa7JxRrPqmnENyg_H8CafzO9iDccuJ1-Z8JnYNBBmBmx9yXCKtynV1_vRcake=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlIz04FcaI0xl_rUSjq_5mkmTXJyv01IoGJazJaZ_K-Jl9nPNXcbA-OJAS90n1miK1HEgtjQP-nZsMq-ZXaQnZPbqcn5bFOsfZi9i4iJXo_bssyPAZrkJnk4yo8YELfsJCwC138PNjM4lY=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk0DYZhgF6j9DwO04-yB7TWj2x8W5qGjtWudLjjEeyDDOMUI7S3DtFCYDHhbjU1-yBZ1pPJukcJdh2P52kHKvGHdTGDOa_BA1EkFwbQ0bK30kspMyHZzKH2VBID6mvnKN7u32O5t7Xpyrtt=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmJ34oJBW97s9sAAUoKukvkUPsgA2B2wOshIijEgJ24Yk9-Y3lbAy15baeiZFHeb8QScPZH82pgsmGQFff4cklwIIYpehou6TjJvkNaIl-tGe6Kp--99-Cqmc4JCLeHdkog65zbXZ0hfjE=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWleH5nh_NZGPWDUFrmmf5StT5KdFuS7Y4IIJh4pw7kNyKYMib9TFRvrML-B9_AZka7iqYOrt7vKUUHZoJOK594k_Qllb7wtYKVulygHMwejRsfoK0jo5vFVpwqEInVHj7-mtRjMEvj9qc71=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlmyJB2gbI2NMg4CmjP3evTOrsTpgOI5h9sYXQUsLDREc5JC62hQ9iST5qj8J84TbXcz3bkTlkDDkZpS9LEeEkNe0TJQKZ_s5e42adQXwDRplS5qsvVxEbzgxe4-_mRX8EZ1WbqskZCpTKM=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/vmG9N6ddGbyhanDR8"
    },
    {
        id: 15,
        name: "Makan Pagi D'Cafetiam",
        category: "sarapan",
        district: "Seri Iskandar",
        isPinned: false,
        operatingHours: "7:00 AM - 12:30 PM (Isnin tutup)",
        desc: "Port sarapan pagi dengan pelbagai menu di Seri Iskandar.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnUyphMf8aF-xb4VAjqQY6m7N0HwEueBFekiiuzhAvYBcva16Agyvv_7IEcJVDVok0KGqPqyoyNfvEyIB6kng8-MMgHIkt-qmiyBiZg1L_rGOHHA1E_FwJf15uZOQ_Prxjo0gfx=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlOzj-aZI2O-X97cpnmPzO1adxPeyIqG-Kb2tAu_o0OoPpeCn99X4xlirEdw6ZSJftppemhEWcEaSIAqjwJ-EtYXo8OIB5HPt95SKGzSQlRvscdjpZKm_FXh2R86JwVg4HXhA1zrw=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkbG0aRrGyf73SXyFXAlTmOaJW7JIY9QA6S8BmcjVHG34-rh5TV-fqPhM3EG-AjZjBvhFhj6BftlYMI-24_lYo-ZYMUwH4xx9kWsTv1iba20g-JPcfKadm09IGUnukE7KG9cYo8=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCcQlEHIZlr8GKtp0eEegLOrXf-64uPdTiVK_EzmW0r2WqSx-vVdVqq0LhjPmSemV9ZqPc3W09xXLuoPNjE2sHtfkdMoAmRsxhFsUd3_CF74iDO1O4OR6EFMJfx4kaVFWRBVen0w=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmkAxaMHbuNP0-XBuoP_7ub1u4InLPZVz47_AxypJrOrrhXujIBKF7OEDaQt8NB98LWpK2ICOZ8RUYESp14ZoBPYHQxCNVc8t5tA2yBztSGJjfes6mG7cuMkHCevoL7Z4zeUevlYP6_rnlq=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkJIZPA8gUMTuTyhbKrx2W8kTJIUZsoo8gQlTmSb7gxOKHKWZLzYGAMztVWuRsy5SLB7W7zuWS6fstSDhBee-wRPQCPAivAVuGv0FNOacsmxjxUtuv7z-83GGJ8pNspopjwYRms7A=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmBQhtcjXZEjfEC3ie6Jq_dVESYi_8-nKtTaEFno62KkW3uoJ8QVXD-Jomca_NXxNe-qSjqBP4MrhMfGG1VT7-7MhkLkO71pgoPqNrz28qNTuvNKg-TZ_xH6oNyIblYoQd2_Hs=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/URYYx8DExghcKqhe7"
    },
    {
        id: 16,
        name: "Rahman's Corner",
        category: "mamak",
        district: "Seri Iskandar",
        isPinned: false,
        operatingHours: "24 jam",
        desc: "Kedai mamak 24 jam di Seri Iskandar.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk8bAec7JLpgUaZH5womefqLnk5v0If_BOgEY_8jD6PF31Kq_bEAzcV-68540gOGGG9MnGABadFFDTZ_JDAO6JDDozjXYGvNiIIFLwLqIXWe0kVuSaqkQOKXOWA3GJ1WFreWYrlbQ=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn2PWdIQXJnuxuZjqlWbPHdFzt95br6LBniccmdwLpYElulpCLUg-HfxsNIBYit06eZ8zUl2zLLazzSa4UZXDWuq6KyEhUNk5boiN-DrIHt3vRB8ePS1EVkl7ySUaM2fbD6Ko7S=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmF4DOnRQREK9ReDF0XP9C4WxN_digxvQhYHrYOaPKp4aaR41AUEv8e69vDztaBThW7yECHywqBbIaaY62ciTAX-TgMBi_1nHTRxZzlwsC8VC6SnvGt3I3C2MaUXKdhjX6CsQ4=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWncYPo_DcZgMh-rkT96iKSVtdG0GBFtTn-WmqVOcF5cHL5lec0NsK37myIyxI6oPGa2MVmQeIv1C9048Lawk2e5o3xttfNdDS6reSKWdge0Lg_mIRE3fO8uBOUlIeqD2Udvm1o=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkzW53QtQZS2Kg-Bsjp0TAot5tKi-nAztnkrpZ69Ma4_OHKUUk7aYr1GKMFfzpDxB3kZG990hSlsmUioKKB_wwc_PC_tXy839nEXdXDsL6ljtypbwxiTgAhVdxfVPeRyDDYZ5UYAueppNw=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkA-wj1-9eJTwGZYATxgPyFwcjhFYpiuiHN1RC_gZgtrPZ9o7u12bvNoEsWRkszEMeF-nDqNBXNjzQt1Es6C-4-InO2c6lCHycKnjgoTqB6Kr3ROyhrUQtdKE0vS46Pa0hQ44ebNA=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmUE-JjmbrEY4dKOLMYxPw0nLrfBeKhtDPRfEoA-2vzG7yK2ASSJCwwm4ZHHkr6DbMxC37MhEsuXgk04rL22jDdfzcl0GIYIsfcv9F-bCJ2BaV1pkLkVH6khbRKm23RYUvy1bzrIg=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/g9Bs9J8QrNXKhnW58"
    },
    {
        id: 17,
        name: "Destina Tomyam",
        category: "petang/malam",
        district: "Tanjung Malim",
        isPinned: false,
        operatingHours: "5:00 PM - 2:00 AM",
        desc: "Antara keddai tomyam yang popular di Tnjung Malim.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl4rdahDh5qcCgV5vwnBOnqD9o0SgWBNWJd13JEDkCMSCpdB7ChmWSassKA8LQkXMbbwwgq0UwNOEs2GypIaG462Jyiw5NWhN0jxX-bYpgOHO5g5IPqJUZvLydE31MptOjdsO3L6ISpWE5P=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlvX9N2otAIiJ9WCMEkAfkl5rrcapXgOGOSZuhkGQ-OIE0jlU11lO58PwMoGgpvncyj14q1kVScGzOtDucBNmWUExndJM3eo0UJk1NaTSj-njfT1_NQ8T6DB4h0UfOyQAamUVOK=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmaR_25O2EHaVw6hAqTLzj7Ma5bNbtvUQNnMvBsrQpwMw2FYhoAG5wk1q2gvlgdnyqXAdaXAAPe4DVktL7PxpwuNw86lIUMNsk-TtMaPB2sNKUPHcXAFaPISZYV1x-sfar2Z5gfSE2ow00=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm2t85ISS0pxZ-GFR4dMgccBT4vXcW4rhE8Bf41HQZFuXgVm26IBnXDqxr9UW2kpUTMsMBbMcaGEY6csscWdF-Acyx6sMz-GAIKzyX-itmB0hYpwWAvYb5YFcTU14EHQFUtfM654_Du1dU=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlkeJ65ZCbPek-Vp6cHSRmD2MQaeQ0rcWXVNnLXF8aTnh6zkmDi7sbI9-mr_mH9cqjhXjkUXcGgY_hiyz2XkzxhXVPbWWNmcarJD1V90q0S9Ev8RDNMg_X-_LJ2VyQQCFign6JRnGVPTkgJ=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmrI8pPaZgrOg5xbHvxb7nfdIOMUofY_eeF4-h7CXWKhpJGQiiP4ghRk4zACGS_hCq3LQfJ0kJ9Z6x1-Bf8h0s3zzJ8rZwGdGZ3AiyCBBajR-4vFuUmwzsi_mrVcYAyk2fltRbN=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmgLQVKZL3-IHnuMl0Kd1hQdmwvEoori0CNN00T2y3Sp1mKeEAR0hV-w_3mGK7RhuC6Z8k1DjgB7jQH9iTXlb62F3W4xlTMhJlNKVKAdVA4-suwRkC2QH9N9dyCObxpfhYR5c6WYQ_3WDSg=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/52FE5SQfgd4DDuFw8"
    },
    {
        id: 18,
        name: "Sambal Bakar Malaya",
        category: "tengah-hari",
        district: "Tanjung Malim",
        isPinned: false,
        operatingHours: "11:00 AM - 10:30 PM",
        desc: "Menu istimewa set nasi dengan sambal bakar.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWms2ngUjGf8VoUvs7gfma0RdqNkNTyAZZAbCrhDx6b12_U-CSwd3A3zexL1z50XwvW5j28qx-Kaq9L6thgG8ytq6jm-eCZ0K3w2q59q3PyTQpjTOmSE-JQ-nzHt76oyt-I7ZutORsLt4Zen=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWydNxpyLFVoFpqptPoM3q4Vvpq2LCb7gTL-CQi-9higSz_dpKafzC6i2v8mRpEZ6GC6xltSHk3DhyOLGpZk9qH4H9yj9TX-U89cxAUv5hgk7BFiDFNOErxOX3plNxESqHGGCRyPT130pz=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkF3GYBFOIORkm_DGg_RRi_cHKLHCVBmnzjhWqZy2qpWDBdnI2HXooVuC0NVBF0LCWNG--aB0_lKeDLha1wlHfzIHy7FX8RlFlxCSGfEIXSpccRQ4TMJUZV7IS8WyAawR1d_4Jv4BeVuxJ8=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmWIBnVL0CZbYy_DeamgTDlm9gtTtCeoK3iVtWOmkRgxzwFOTiBJWkruPMkUaQaJCCEZZUEpvsKPSCXQt771hZw2W1J4HmzY6pLqYaTOqNTUpVkIBkhhQW00L68vmWAPbgCvqKJlmU6J65u=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlijHP6ukCq1zEQyfe3A8EHlo2XnwVFmLX8bsXfnZ18PfKA53IpvMXxLpsW3QKSErw9gzFBFBsJlTaaJueGiYq9lu-06wNBK83TGdo2DLM7EiwMzHtJDYpfQpyNtdLAbhV5n6z6ecFjPOtx=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnGxJcIHAxE2ksc2UhJybaC2-eawPWDSRBQypR9MmvW9yMWpnWVgG6MHQSNX7B6Yip7wj0buRh75LVcYtWfLngmOYF1s82aHd0D9FD0gpThY4zRqddocZjhNS9ZIPQrZL-xqC1Kk9ZmUSD4=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkqUPyfoez3xsqitn1TsNnCaBsiwMLuJvuJtdwhumWfl7LLlD_W0UdDbVNVCOGV09aW5zCOhPoFONQuwmHzDpG4WnHqKkEtJ5crgmA0XLcQUfK6f_BrAaoCydqQIaWj0JFMM-lTMfyFPbE7=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/mAC9DmJy5VRskYE8A"
    },
    {
        id: 19,
        name: "Big Portion Cafe",
        category: "petang/malam",
        district: "Batu Gajah",
        isPinned: false,
        operatingHours: "4:00 PM - 11:30 PM",
        desc: "Port makan malam kegemaran ramai di Batu Gajah! Menyajikan pelbagai pilihan pizza, nasi arab, makanan western dan ala carte.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnK65mIBJjZqfln_0Eck4bZ2AX9Jkjdvyt1BlQdb47ndCjrlyrg2x67iaGDxHoZfP-ZgHeHsdRNQ6HeKtZC7BMNmHVTY9isBzyc5CdzWkP3p_OBZKJ8km-VkRnQDah5SHnnEdDXIANg5W60=s1360-w1360-h1020-rw",
        photos: [
            "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=-OPuy-lBjVYS0s3IbscTyw&cb_client=search.gws-prod.gps&yaw=297.87915&pitch=0&thumbfov=100&w=80&h=80",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmDKTUbGHsOUaqbsdaMsDTi71S5vcT5Kv17YO-t_U5pdEPDMn7X2t__3Pnv1Sxhelvst8GdA2fDgzNHxASo0CIAs7V5VlaJo8_fVr0VON7TE1Oc_2_wnZpyVaRzp7tPYqFnAmLrwmoW2sqK=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmhzULf7wn38etvF78qF2UMQB-AJPBBp3muQtXVPtNatIlDL7psUICFp4dlfZjBcBuXn8uWYw3pekiXc-5PxEpnwBTIVCl6U3nPwn6JY__R1BL37p8KOVvw-Iqbs6aIU_YSNXHKke_5mJ8=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnI1d7wQF89dPTd4xwUJhbAvrs1UJgENxgzyBd8TRB-mLwAaKXYKcqclPXcIAhk8dcvXYF8lz6WH1ncAUZBzrFORo53nts2QpBSoBMZ58wA_qysAYMxJP9zzV7ZF6nWsk-0LvIB7twbuDdm=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnZOJc-YlnSHBv5d4yRQ9DJ10W3gV0jCrAhdndA6FJ2zCp3jD_irZaP7yn4glES4j_BjDJ-dRfZyL1bqqv5-8Ev_ndT-h7taVFeNqawSbEV3vzEzzg1p7MBGlCp6RPEWN8mbzCSJtIAdGGK=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmv2IcadqugHJ7TR161sUtYZ930eDUXXwjAdlkz1w6X4KBb7GAiUfwu2Myp-qaDMH_Y6w0xML5O4F8vmxxEXawLNPFhTnT-oCXjM5W3qgECVAiSs2Soxgke5XN550xULxomNafpkS65NkpO=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/sjVvjvR5FxuwUaHB8"
    },
    {
        id: 20,
        name: "Dapor Montak Riverside Cafe",
        category: "kafe",
        district: "Ipoh",
        isPinned: false,
        operatingHours: "5:00 PM - 1:00 AM (Last order 12:30 AM | Khamis Tutup)",
        desc: "Port santai tepi sungai yang menyajikan makanan barat, tempatan serta fusion dengan olahan resipi tersendiri bagi menerbitkan rasa signature. Dijual pada harga yang mampu milik untuk golongan pendapatan sederhana serta rendah.",
        coverImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm0NEwarwQG4366qNTnY1VdSRwzgrT55YZ_rdrCXT-YvcFu455mJxyh9sFZ13lEEmMjr6PnipkvqVK-VRfbmokWSaFeQAlooKWckEHnzc1ovXbzJSaxKMy_tNhPdQVwGCbsOPpg5_IER1Co=s1360-w1360-h1020-rw",
        photos: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl1t9EckNlLxVrawKjZEoRvRTQLyPsuBCsUNRtRxg7UyEKCTteb3RW1eezQVfV56VJVXU5irbgaNWLCMH6w5lzy4KHV6TR-0i9J_V_pPZFhP_vmH4bQ1KkkTyBh8PK42dugELm-3kl7IB2S=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnc1PWM0tvmU5thslbWcMiojqoXbluldN0E1xqZ71DGPk1TFZaEmu3227LBeTCgFs_bzNO4QToDaWqPgiZLtwU7iUfmCw4iwVtyYaIQlOKkYovK6tO58XTHshZOz5QYZ8m8gBdGaCmpvt1X=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnLHIFp8g6YZwhyJoIbPojvdia9HpLxJ_QPq5Qx0m2oz2DU4uex0YDsGA_a62yNhNFMzcjWs3PewvKNi9sQQIgOvZBbDHI241UFXPFufd6Q7UgVI8m-CXoqZDqZ8JX9I_R0DPB7DfuWXOQv=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnBRI6OHWOZOGt7VzDmRzB7eSfen4iBkieclXKdrBve9RUMqYlX5UW-z0vsd0PuFW0kNmURWr4b9tKDYMrCbmdKGdS7Om8YdBSnI2-vaBp36-erOcOWo8lzLJtULY1SMvHACFq4xeQAMI4=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkaGlzpj9mzzEwO5VjWWwNZHdA0qV-27GVSy4aI5QiT-j7W3rjurSgvOLRjilRRY_56BfR0-invKQ3wF1esuM5KJl99Hk6hrFJK5b-KqlWKFMH8euP03nprZ9AlTfvmiZZ2qPSW=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnAm_rSGpcqbbqb_q2_A-fpZOf9ma1H0S66DCFnqTZ260tI-Ip0gif4iFf-KKX8oJMhMURTYJmgcskOH71lz1PaKLJFXFT1b4LX7uOS6m-lX4bvEzeqr4mXekpUZjO7XFWFX6AS=s1360-w1360-h1020-rw"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/96WCqSFB3yULpQrZ9"
    }
];

//  kategori semasa
let currentCategory = 'all';

// 1. Shuffle (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 2. FUNGSI TEKAN BUTANG KATEGORI
function filterCategory(category, buttonElement) {
    currentCategory = category;

    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    applyFilters();
}

// 3. FUNGSI GABUNGAN PENAPIS (SEARCH + KATEGORI + DAERAH + SHUFFLE + PINNED)
function applyFilters() {
    const selectedDistrict = document.getElementById('district-filter').value;
    const searchVal = document.getElementById('search-input')?.value.toLowerCase().trim() || '';

    // TAPIS 1: Mengikut Kategori
    let filtered = currentCategory === 'all' 
        ? [...restaurants] 
        : restaurants.filter(r => r.category === currentCategory);

    // TAPIS 2: Mengikut Daerah
    if (selectedDistrict !== 'all') {
        filtered = filtered.filter(r => r.district.toLowerCase().includes(selectedDistrict.toLowerCase()));
    }

    //Searchbar
    if (searchVal !== '') {
        filtered = filtered.filter (r =>
            r.name.toLowerCase().includes(searchVal) ||
            r.category.toLowerCase().includes(searchVal) ||
            (r.desc && r.desc.toLowerCase().includes(searchVal))
            );
    }

    // TAPIS 3: RAWAKKAN SENARAI KEDAI 
    filtered = shuffleArray(filtered);

    // TAPIS 4: ASINGKAN & UTAMAKAN ISPINNED: TRUE DI ATAS
    filtered.sort((a, b) => {
        const aPinned = a.isPinned ? 1 : 0;
        const bPinned = b.isPinned ? 1 : 0;
        return bPinned - aPinned;
    });

    renderCards(filtered);
}

// 4. PAPARKAN KAD KEDAI PADA SKRIN
function renderCards(list) {
    const container = document.getElementById('restaurant-list');
    if (!container) return;
    
    container.innerHTML = '';

    if (list.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
            <i class="fa-solid fa-utensils" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <p>Tiada kedai ditemui untuk daerah & kategori ini.</p>
        </div>`;
        return;
    }

   list.forEach(item => {
    const card = document.createElement('div');
    card.className = `card ${item.isPinned ? 'pinned' : ''}`;

    let featuredBadge = '';
    if (item.isPinned) {
      featuredBadge = '<span class="badge-featured-overlay"><i class="fa-solid fa-star"></i> FEATURED</span>';
    }

    card.innerHTML = `
      <div class="card-img-wrapper" style="position: relative;">
        <img src="${item.coverImage}" alt="${item.name}" class="card-img">
        ${featuredBadge}
      </div>
      <div class="card-body">
        <span class="badge-category">${item.category}</span>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-district"><i class="fa-solid fa-location-dot"></i> ${item.district}</p>
        <button class="btn-card-detail" onclick="openModal('${item.id}')">
          <i class="fa-solid fa-eye"></i> Detail & Lokasi
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// 5. BUKA POPUP MODAL
function openModal(id) {
    const item = restaurants.find(r => r.id == id);
    if (!item) return;

    document.getElementById('modal-title').innerText = item.name;
    document.getElementById('modal-location-text').querySelector('span').innerText = item.district;
    document.getElementById('modal-hours').innerText = item.operatingHours || "Masa tidak dinyatakan";
    document.getElementById('modal-desc').innerText = item.desc;
    document.getElementById('modal-map-link').href = item.googleMapsUrl;

    // Galeri Foto
    const galleryContainer = document.getElementById('modal-gallery');
    galleryContainer.innerHTML = '';
    
    if (item.photos && item.photos.length > 0) {
        item.photos.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;

            img.onclick = function() {
                const viewer = document.getElementById('imageViewer');
                const fullImg = document.getElementById('fullImage');
                fullImg.src =imgUrl;
                viewer.classList.add('active');
            }
            galleryContainer.appendChild(img);
        });
    }

    document.getElementById('details-modal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// 6. TUTUP POPUP MODAL
function closeModal() {
    document.getElementById('details-modal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// MULA-MULA LOAD HOMEPAGE
document.addEventListener('DOMContentLoaded', () => {
    applyFilters();
});
