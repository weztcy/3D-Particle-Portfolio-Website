# Backup Data: Academic Research Publications

> **Source:** `src/data/publications/publicationsData.ts`  
> **Exported Collection:** `PUBLICATIONS_LIST` (1 item(s))  
> **Generated:** `2026-11-09T09:33:19.065Z`

---

## Publication Summary

| ID | Title | Publisher / Journal | Level | Year | DOI |
| :--- | :--- | :--- | :--- | :---: | :--- |
| `pub-1` | **Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset** | Journal of Applied Informatics and Computing (JAIC) | `Sinta 3` | 2025 | [10.30871/jaic.v9i3.9353](https://doi.org/10.30871/jaic.v9i3.9353) |

---

## Detailed Paper Documentation


### 1. Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset

- **ID:** `pub-1`
- **Title:** **Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset**
- **Authors:** Yohanes Dimas Pratama (First Author), Abu Salam
- **Author Status:** `First Author`
- **Journal Name:** Journal of Applied Informatics and Computing (JAIC)
- **Journal Indexing Level:** `Sinta 3`
- **Field of Study:** Machine Learning & Healthcare Data Mining
- **Publication Year:** 2025
- **Volume / Issue / Pages:** `Vol. 9, No. 3 (June 2025), pp. 693–706`
- **ISSN:** `2548-6861 (Online)`
- **DOI:** [10.30871/jaic.v9i3.9353](https://doi.org/10.30871/jaic.v9i3.9353)
- **Paper URL:** [https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/9353](https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/9353)
- **PDF URL:** [/papers/jaic-2025/Jurnal.pdf](/papers/jaic-2025/Jurnal.pdf)

#### Abstract Summary
Evaluated Min-Max Scaling, Z-Score, and Decimal Scaling on K-Nearest Neighbors for diabetes diagnosis using the Pima Indians Diabetes dataset. After Random Forest feature selection, Min-Max Scaling achieved 81.17% accuracy, 0.8050 ROC AUC, and statistically significant superiority (p < 0.05) verified via Paired T-Test.

#### Full Abstract
This study analyzes the comparison of data normalization techniques in the K-Nearest Neighbors (KNN) model for diabetes classification using the Pima Indians Diabetes dataset. The three normalization techniques evaluated are Min-Max Scaling, Z-Score Scaling, and Decimal Scaling. After preprocessing, such as handling missing values and removing duplicates, as well as feature selection using the Random Forest method, the features removed include SkinThickness, Insulin, Pregnancies, and BloodPressure. The evaluation was carried out using accuracy, precision, recall, F1-Score, specificity, and ROC AUC metrics. The results show that Min-Max Scaling provides a significant improvement in all metrics, with the highest accuracy of 0.8117 and ROC AUC of 0.8050. Z-Score Scaling provides good results, but not as good as Min-Max Scaling. Decimal Scaling shows the lowest performance. Statistical tests using Paired T-Test show significant differences between Min-Max Scaling and without normalization on all metrics (P-Value < 0.05), while Z-Score Scaling and Decimal Scaling are only significant on some metrics, with P-Values of 0.08363 and 0.43839 respectively for accuracy and ROC AUC. Overall, Min-Max Scaling proved to be the best normalization method for improving KNN performance in diabetes classification.

#### Article History
- **Received:** March 27, 2025
- **Revised:** April 12, 2025
- **Accepted:** April 14, 2025
- **Published:** June 2025

#### Keywords
`Data Normalization` · `K-Nearest Neighbors (KNN)` · `Diabetes Classification` · `Min-Max Scaling` · `Z-Score Scaling` · `Decimal Scaling` · `Random Forest Feature Selection` · `Paired T-Test` · `Pima Indians Diabetes`

#### Key Contributions
- Empirical comparative analysis of Min-Max Scaling, Z-Score Scaling, and Decimal Scaling against unnormalized baselines to eliminate Euclidean distance distortion in KNN classification.
- Applied Random Forest Gini Impurity feature selection strictly on training data (80:20 split) to prune 4 uninformative features (SkinThickness, Insulin, Pregnancies, BloodPressure) and prevent data leakage.
- Comprehensive multi-metric benchmarking (Accuracy 81.17%, ROC AUC 0.8050, Precision 79.46%, Recall 79.70%, F1 79.58%, Specificity 84.85%) across neighbor variations K ∈ {1, 3, 5, 7, 9, 11}.
- Rigorous Paired T-Test inferential statistical validation confirming that Min-Max Scaling produces statistically significant performance improvements (p < 0.05) across all six clinical evaluation metrics.

#### Research Metrics
| Metric Label | Value |
| :--- | :--- |
| Peak Model Accuracy | **81.17%** |
| Diagnostic ROC AUC | **0.8050** |
| Paired T-Test Sig. | **p < 0.05** |
| Feature Space Pruned | **-50% Dim** |

#### Pipeline Steps

##### STEP 01: Medical Data Ingestion *(Metric: `768 Patients (80:20 Split)`)*
Pima Indians Diabetes dataset (768 patient records) inspected for datatypes, missing values (0), and duplicates (0), followed by an 80:20 Train-Test split.


##### STEP 02: Random Forest Feature Selection *(Metric: `4 Features Kept (-50% Dim)`)*
Ensemble Gini Impurity ranking on training data isolates 4 high-impact predictors (Glucose, BMI, Age, DPF) while pruning 4 low-yield features.


##### STEP 03: Multi-Technique Normalization *(Metric: `3 Scaling Methods Tested`)*
Min-Max Scaling [0, 1], Z-Score Scaling (μ=0, σ=1), and Decimal Scaling applied to equalize feature variances and resolve distance bias.


##### STEP 04: KNN & Paired T-Test Validation *(Metric: `81.17% Acc (K=7, p < 0.05)`)*
Evaluated across K ∈ {1..11} with Euclidean metric; Paired T-Test confirms Min-Max superiority (p < 0.05 across all 6 diagnostic metrics).


#### Citations

##### Citation Text
> Pratama, Y. D., & Salam, A. (2025). Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset. Journal of Applied Informatics and Computing (JAIC), 9(3), 693-706. https://doi.org/10.30871/jaic.v9i3.9353

##### BibTeX
```bibtex
@article{pratama2025comparison,
  author    = {Pratama, Yohanes Dimas and Salam, Abu},
  title     = {Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset},
  journal   = {Journal of Applied Informatics and Computing (JAIC)},
  volume    = {9},
  number    = {3},
  pages     = {693--706},
  year      = {2025},
  issn      = {2548-6861},
  doi       = {10.30871/jaic.v9i3.9353},
  url       = {https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/9353}
}
```


##### Standard Citation Styles
- **APA:** Pratama, Y. D., & Salam, A. (2025). Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset. Journal of Applied Informatics and Computing (JAIC), 9(3), 693-706. https://doi.org/10.30871/jaic.v9i3.9353
- **IEEE:** Y. D. Pratama and A. Salam, "Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset," Journal of Applied Informatics and Computing (JAIC), vol. 9, no. 3, pp. 693-706, Jun. 2025, doi: 10.30871/jaic.v9i3.9353.
- **ACM:** Yohanes Dimas Pratama and Abu Salam. 2025. Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset. Journal of Applied Informatics and Computing (JAIC) 9, 3 (June 2025), 693–706. https://doi.org/10.30871/jaic.v9i3.9353
- **Harvard:** Pratama, Y.D. and Salam, A., 2025. Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset. Journal of Applied Informatics and Computing (JAIC), 9(3), pp.693-706. Available at: <https://doi.org/10.30871/jaic.v9i3.9353>.
- **Chicago:** Pratama, Yohanes Dimas, and Abu Salam. 2025. "Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset." Journal of Applied Informatics and Computing (JAIC) 9 (3): 693–706. https://doi.org/10.30871/jaic.v9i3.9353.
- **MLA:** Pratama, Yohanes Dimas, and Abu Salam. "Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset." Journal of Applied Informatics and Computing (JAIC), vol. 9, no. 3, June 2025, pp. 693–706. DOI: 10.30871/jaic.v9i3.9353.


#### References (35)

1. **I. W. Suryasa, M. Rodríguez-Gámez, and T. Koldoris** (2021). *Health and Treatment of Diabetes Mellitus*. International Journal of Health Sciences (IJHS), vol. 5, no. 1, pp. I–V, 2021. DOI: [10.53730/IJHS.V5N1.2864](https://doi.org/10.53730/IJHS.V5N1.2864) `[Clinical & Diabetes]`


2. **L. Ryden, G. Ferrannini, and E. Standl** (2023). *Risk prediction in patients with diabetes: is SCORE 2D the perfect solution?*. Jul. 21, 2023, Oxford University Press. DOI: [10.1093/eurheartj/ehad263](https://doi.org/10.1093/eurheartj/ehad263) `[Clinical & Diabetes]`


3. **S. Alam, M. K. Hasan, S. Neaz, N. Hussain, M. F. Hossain, and T. Rahman** (2021). *Diabetes Mellitus: Insights from Epidemiology, Biochemistry, Risk Factors, Diagnosis, Complications and Comprehensive Management*. Jun. 01, 2021, MDPI. DOI: [10.3390/diabetology2020004](https://doi.org/10.3390/diabetology2020004) `[Clinical & Diabetes]`


4. **S. Templer, S. Abdo, and T. Wong** (2024). *Preventing diabetes complications*. Intern Med J, vol. 54, no. 8, pp. 1264–1274, Aug. 2024. DOI: [10.1111/imj.16455](https://doi.org/10.1111/imj.16455) `[Clinical & Diabetes]`


5. **S. Zhang and J. Li** (2021). *KNN Classification With One-Step Computation*. IEEE Trans Knowl Data Eng , vol. 35, no. 3, pp. 2711–2723, Mar. 2023. DOI: [10.1109/TKDE.2021.3119140](https://doi.org/10.1109/TKDE.2021.3119140) `[KNN & Classification]`


6. **N. Ukey, Z. Yang, B. Li, G. Zhang, Y. Hu, and W. Zhang** (2023). *Survey on Exact kNN Queries over High-Dimensional Data Space*. Jan. 01, 2023, MDPI. DOI: [10.3390/s23020629](https://doi.org/10.3390/s23020629) `[KNN & Classification]`


7. **S. Zhang** (2021). *Challenges in KNN Classification*. IEEE Trans Knowl Data Eng , vol. 34, no. 10, pp. 4663 –4675, Oct. 2022. DOI: [10.1109/TKDE.2021.3049250](https://doi.org/10.1109/TKDE.2021.3049250) `[KNN & Classification]`


8. **M. V. Polyakova and V. N. Krylov** (2022). *Data normalization methods to improve the quality of classification in the breast cancer diagnostic system*. Applied Aspects of Information Technology , vol. 5, no. 1, pp. 55–63, Apr. 2022. DOI: [10.15276/aait.05.2022.5](https://doi.org/10.15276/aait.05.2022.5) `[Normalization & Scaling]`


9. **M. Zulkifilu and A. Yasir** (2022). *About Some Data Precaution Techniques For K-Means Clustering Algorithm*. UMYU Scientifica, vol. 1, no. 1, pp. 12 –19, 2022. DOI: [10.47430/usci.1122.003](https://doi.org/10.47430/usci.1122.003) `[Data Preprocessing]`


10. **M. Pagan, M. Zarlis, and A. Candra** (2023). *Investigating the impact of data scaling on the k-nearest neighbor algorithm*. Computer Science and Information Technologies, vol. 4, no. 2, pp. 135–142, Jul. 2023. DOI: [10.11591/csit.v4i2.pp135-142](https://doi.org/10.11591/csit.v4i2.pp135-142) `[Normalization & Scaling]`


11. **A. Alsarhan, F. Hussein, S. Moh, and F. S. El-Salhi** (2021). *The Effect of Preprocessing Techniques, Applied to Numeric Features, on Classification Algorithms' Performance*. Data (Basel), vol. 6, no. 2, 2021. DOI: [10.3390/data](https://doi.org/10.3390/data) `[Data Preprocessing]`


12. **S. Sinsomboonthong** (2022). *Performance Comparison of New Adjusted Min-Max with Decimal Scaling and Statistical Column Normalization Methods for Artificial Neural Network Classification*. Int J Math Math Sci , vol. 2022, 2022. DOI: [10.1155/2022/3584406](https://doi.org/10.1155/2022/3584406) `[Normalization & Scaling]`


13. **C. C. Olisah, L. Smith, and M. Smith** (2022). *Diabetes mellitus prediction and diagnosis from a data preprocessing and machine learning perspective*. Comput Methods Programs Biomed , vol. 220, Jun. 2022. DOI: [10.1016/j.cmpb.2022.106773](https://doi.org/10.1016/j.cmpb.2022.106773) `[Clinical & Diabetes]`


14. **A. M. Vommi and T. K. Battula** (2023). *A hybrid filter-wrapper feature selection using Fuzzy KNN based on Bonferroni mean for medical datasets classification: A COVID-19 case study*. Expert Syst Appl, vol. 218, May 2023. DOI: [10.1016/j.eswa.2023.119612](https://doi.org/10.1016/j.eswa.2023.119612) `[Feature Selection & RF]`


15. **Y. Zhao** (2025). *Comparative Analysis of Diabetes Prediction Models Using the Pima Indian Diabetes Database*. ITM Web of Conferences, vol. 70, p. 02021, Jan. 2025. DOI: [10.1051/itmconf/20257002021](https://doi.org/10.1051/itmconf/20257002021) `[Clinical & Diabetes]`


16. **V. Chang, J. Bailey, Q. A. Xu, and Z. Sun** (2023). *Pima Indians diabetes mellitus classification based on machine learning (ML) algorithms*. Neural Comput Appl , vol. 35, no. 22, pp. 16157 – 16173, Aug. 2023. DOI: [10.1007/s00521-022-07049-z](https://doi.org/10.1007/s00521-022-07049-z) `[Clinical & Diabetes]`


17. **V. Patil and D. R. Ingle** (2021). *Comparative Analysis of Different ML Classification Algorithms with Diabetes Prediction through Pima Indian Diabetics Dataset*. in 2021 International Conference on Intelligent Technologies, CONIT 2021 , Institute of Electrical and Electronics Engineers Inc., Jun. 2021. DOI: [10.1109/CONIT51480.2021.9498361](https://doi.org/10.1109/CONIT51480.2021.9498361) `[Clinical & Diabetes]`


18. **H. Karamti et al** (2023). *Improving Prediction of Cervical Cancer Using KNN Imputed SMOTE Features and Multi-Model Ensemble Learning Approach*. Cancers (Basel), vol. 15, no. 17, Sep. 2023. DOI: [10.3390/cancers15174412](https://doi.org/10.3390/cancers15174412) `[KNN & Classification]`


19. **M. N. Maskuri, K. Sukerti, and R. M. Herdian Bhakti** (2022). *Penerapan Algoritma K-Nearest Neighbor (KNN) untuk Memprediksi Penyakit Stroke Stroke Desease Predict Using KNN Algorithm*. Jurnal Ilmiah Intech : Information Technology Journal of UMUS , vol. 4, no. 1, May 2022.  `[KNN & Classification]`


20. **C. Fan, M. Chen, X. Wang, J. Wang, and B. Huang** (2021). *A Review on Data Preprocessing Techniques Toward Efficient and Reliable Knowledge Discovery From Building Operational Data*. Mar. 29, 2021, Frontiers Media S.A. DOI: [10.3389/fenrg.2021.652801](https://doi.org/10.3389/fenrg.2021.652801) `[Data Preprocessing]`


21. **O. Alotaibi, E. Pardede, and S. Tomy** (2023). *Cleaning Big Data Streams: A Systematic Literature Review*. Aug. 01, 2023, Multidisciplinary Digital Publishing Institute (MDPI). DOI: [10.3390/technologies11040101](https://doi.org/10.3390/technologies11040101) `[Data Preprocessing]`


22. **M. Arif, maruf Setiawan, A. Dwi Hartono, M. Arif Ma, and ruf Setiawan** (2025). *Menggunakan Metode Machine Learning Untuk Memprediksi Nilai Mahasiswa Dengan Model Prediksi Multiclass*. Jurnal Informatika: Jurnal pengembangan IT, vol. 10, no. 1, p. 2025, 2025. DOI: [10.30591/jpit.v9ix.xxx](https://doi.org/10.30591/jpit.v9ix.xxx) `[Data Preprocessing]`


23. **L. A. Demidova** (2021). *Two-stage hybrid data classifiers based on svm and knn algorithms*. Symmetry (Basel), vol. 13, no. 4, Apr. 2021. DOI: [10.3390/sym13040615](https://doi.org/10.3390/sym13040615) `[KNN & Classification]`


24. **N. Pudjihartono, T. Fadason , A. W. Kempa -Liehr, and J. M. O'Sullivan** (2022). *A Review of Feature Selection Methods for Machine Learning-Based Disease Risk Prediction*. Jun. 27, 2022, Frontiers Media SA. DOI: [10.3389/fbinf.2022.927312](https://doi.org/10.3389/fbinf.2022.927312) `[Feature Selection & RF]`


25. **M. Alduailij, Q. W. Khan, M. Tahir, M. Sardaraz, M. Alduailij, and F. Malik** (2022). *Machine-Learning-Based DDoS Attack Detection Using Mutual Information and Random Forest Feature Importance Method*. Symmetry (Basel) , vol. 14, no. 6, Jun. 2022. DOI: [10.3390/sym14061095](https://doi.org/10.3390/sym14061095) `[Feature Selection & RF]`


26. **A. G. Priya Varshini, K. Anitha Kumari, and V. Varadarajan** (2021). *Estimating software development efforts using a random forest-based stacked ensemble approach*. Electronics (Switzerland), vol. 10, no. 10, May 2021. DOI: [10.3390/electronics10101195](https://doi.org/10.3390/electronics10101195) `[Feature Selection & RF]`


27. **R. A. Disha and S. Waheed** (2022). *Performance analysis of machine learning models for intrusion detection system using Gini Impurity-based Weighted Random Forest (GIWRF) feature selection technique*. Cybersecurity, vol. 5, no. 1, Dec. 2022. DOI: [10.1186/s42400-021-00103-8](https://doi.org/10.1186/s42400-021-00103-8) `[Feature Selection & RF]`


28. **P. J. Muhammad Ali** (2022). *Investigating the Impact of Min-Max Data Normalization on the Regression Performance of K-Nearest Neighbor with Different Similarity Measurements*. ARO-THE SCIENTIFIC JOURNAL OF KOYA UNIVERSITY , vol. 10, no. 1, pp. 85–91, Jun. 2022. DOI: [10.14500/aro.10955](https://doi.org/10.14500/aro.10955) `[Normalization & Scaling]`


29. **Henderi , T. Wahyuningsih , and E. Rahwanto** (2021). *Comparison of Min-Max normalization and Z-Score Normalization in the K-nearest neighbor (kNN) Algorithm to Test the Accuracy of Types of Breast Cancer*. International Journal of Informatics and Information System, vol. 4, no. 1, Mar. 2021, [Online]. Available: http://archive.ics.uci.edu/ml.  `[Normalization & Scaling]`


30. **M. R. Firmansyah and Y. P. Astuti** (2024). *Stroke Classification Comparison with KNN through Standardization and Normalization Techniques*. Advance Sustainable Science, Engineering and Technology, vol. 6, no. 1, Jan. 2024. DOI: [10.26877/asset.v6i1.17685](https://doi.org/10.26877/asset.v6i1.17685) `[Normalization & Scaling]`


31. **Emad Majeed Hameed and Hardik Joshi** (2024). *Improving Diabetes Prediction by Selecting Optimal K and Distance Measures in KNN Classifier*. Journal of Techniques, vol. 6, no. 3, pp. 19 –25, Aug. 2024. DOI: [10.51173/jt.v6i3.2587](https://doi.org/10.51173/jt.v6i3.2587) `[KNN & Classification]`


32. **G. Fatima and S. Saeed** (2021). *A Novel Weighted Ensemble Method to Overcome the Impact of Under-fitting and Over-fitting on the Classification Accuracy of the Imbalanced Data Sets*. Pakistan Journal of Statistics and Operation Research , vol. 17, no. 2, pp. 483–496, 2021. DOI: [10.18187/pjsor.v17i2.3640](https://doi.org/10.18187/pjsor.v17i2.3640) `[Data Preprocessing]`


33. **S. Gündoğdu** (2023). *Efficient prediction of early-stage diabetes using XGBoost classifier with random forest feature selection technique*. Multimed Tools Appl , vol. 82, no. 22, pp. 34163 – 34181, Sep. 2023. DOI: [10.1007/s11042-023-15165-8](https://doi.org/10.1007/s11042-023-15165-8) `[Feature Selection & RF]`


34. **A. S. Maklad, M. A. Mahdy, A. Malki, N. Niki, and A. A. Mohamed** (2024). *Advancing Early Detection of Colorectal Adenomatous Polyps via Genetic Data Analysis: A Hybrid Machine Learning Approach*. Journal of Computer and Communications, vol. 12, no. 07, pp. 23 –38, 2024. DOI: [10.4236/jcc.2024.127003](https://doi.org/10.4236/jcc.2024.127003) `[Data Preprocessing]`


35. **A. Zweifach** (2024). *Samples in many cell-based experiments are matched/paired but taking this into account does not always increase power of statistical tests for differences in means*. Molecular Biology of the Cell (MBoC), vol. 35, no. 1, p. br1, Jan. 2024. DOI: [10.1091/mbc.E23-05-0159](https://doi.org/10.1091/mbc.E23-05-0159) `[Statistical Inference]`



---

## Raw JSON Data

```json
[
  {
    "id": "pub-1",
    "year": "2025",
    "authorStatus": "First Author",
    "title": "Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset",
    "publisher": "Journal of Applied Informatics and Computing (JAIC)",
    "journalLevel": "Sinta 3",
    "field": "Machine Learning & Healthcare Data Mining",
    "abstractSummary": "Evaluated Min-Max Scaling, Z-Score, and Decimal Scaling on K-Nearest Neighbors for diabetes diagnosis using the Pima Indians Diabetes dataset. After Random Forest feature selection, Min-Max Scaling achieved 81.17% accuracy, 0.8050 ROC AUC, and statistically significant superiority (p < 0.05) verified via Paired T-Test.",
    "paperUrl": "https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/9353",
    "pdfUrl": "/papers/jaic-2025/Jurnal.pdf",
    "doi": "10.30871/jaic.v9i3.9353",
    "doiUrl": "https://doi.org/10.30871/jaic.v9i3.9353",
    "authors": "Yohanes Dimas Pratama (First Author), Abu Salam",
    "journalName": "Journal of Applied Informatics and Computing (JAIC)",
    "volumeInfo": "Vol. 9, No. 3 (June 2025), pp. 693–706",
    "issn": "2548-6861 (Online)",
    "articleHistory": {
      "received": "March 27, 2025",
      "revised": "April 12, 2025",
      "accepted": "April 14, 2025",
      "published": "June 2025"
    },
    "fullAbstract": "This study analyzes the comparison of data normalization techniques in the K-Nearest Neighbors (KNN) model for diabetes classification using the Pima Indians Diabetes dataset. The three normalization techniques evaluated are Min-Max Scaling, Z-Score Scaling, and Decimal Scaling. After preprocessing, such as handling missing values and removing duplicates, as well as feature selection using the Random Forest method, the features removed include SkinThickness, Insulin, Pregnancies, and BloodPressure. The evaluation was carried out using accuracy, precision, recall, F1-Score, specificity, and ROC AUC metrics. The results show that Min-Max Scaling provides a significant improvement in all metrics, with the highest accuracy of 0.8117 and ROC AUC of 0.8050. Z-Score Scaling provides good results, but not as good as Min-Max Scaling. Decimal Scaling shows the lowest performance. Statistical tests using Paired T-Test show significant differences between Min-Max Scaling and without normalization on all metrics (P-Value < 0.05), while Z-Score Scaling and Decimal Scaling are only significant on some metrics, with P-Values of 0.08363 and 0.43839 respectively for accuracy and ROC AUC. Overall, Min-Max Scaling proved to be the best normalization method for improving KNN performance in diabetes classification.",
    "keywords": [
      "Data Normalization",
      "K-Nearest Neighbors (KNN)",
      "Diabetes Classification",
      "Min-Max Scaling",
      "Z-Score Scaling",
      "Decimal Scaling",
      "Random Forest Feature Selection",
      "Paired T-Test",
      "Pima Indians Diabetes"
    ],
    "keyContributions": [
      "Empirical comparative analysis of Min-Max Scaling, Z-Score Scaling, and Decimal Scaling against unnormalized baselines to eliminate Euclidean distance distortion in KNN classification.",
      "Applied Random Forest Gini Impurity feature selection strictly on training data (80:20 split) to prune 4 uninformative features (SkinThickness, Insulin, Pregnancies, BloodPressure) and prevent data leakage.",
      "Comprehensive multi-metric benchmarking (Accuracy 81.17%, ROC AUC 0.8050, Precision 79.46%, Recall 79.70%, F1 79.58%, Specificity 84.85%) across neighbor variations K ∈ {1, 3, 5, 7, 9, 11}.",
      "Rigorous Paired T-Test inferential statistical validation confirming that Min-Max Scaling produces statistically significant performance improvements (p < 0.05) across all six clinical evaluation metrics."
    ],
    "metrics": [
      {
        "label": "Peak Model Accuracy",
        "value": "81.17%"
      },
      {
        "label": "Diagnostic ROC AUC",
        "value": "0.8050"
      },
      {
        "label": "Paired T-Test Sig.",
        "value": "p < 0.05"
      },
      {
        "label": "Feature Space Pruned",
        "value": "-50% Dim"
      }
    ],
    "pipelineSteps": [
      {
        "step": "STEP 01",
        "title": "Medical Data Ingestion",
        "description": "Pima Indians Diabetes dataset (768 patient records) inspected for datatypes, missing values (0), and duplicates (0), followed by an 80:20 Train-Test split.",
        "metric": "768 Patients (80:20 Split)"
      },
      {
        "step": "STEP 02",
        "title": "Random Forest Feature Selection",
        "description": "Ensemble Gini Impurity ranking on training data isolates 4 high-impact predictors (Glucose, BMI, Age, DPF) while pruning 4 low-yield features.",
        "metric": "4 Features Kept (-50% Dim)"
      },
      {
        "step": "STEP 03",
        "title": "Multi-Technique Normalization",
        "description": "Min-Max Scaling [0, 1], Z-Score Scaling (μ=0, σ=1), and Decimal Scaling applied to equalize feature variances and resolve distance bias.",
        "metric": "3 Scaling Methods Tested"
      },
      {
        "step": "STEP 04",
        "title": "KNN & Paired T-Test Validation",
        "description": "Evaluated across K ∈ {1..11} with Euclidean metric; Paired T-Test confirms Min-Max superiority (p < 0.05 across all 6 diagnostic metrics).",
        "metric": "81.17% Acc (K=7, p < 0.05)"
      }
    ],
    "citationText": "Pratama, Y. D., & Salam, A. (2025). Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset. Journal of Applied Informatics and Computing (JAIC), 9(3), 693-706. https://doi.org/10.30871/jaic.v9i3.9353",
    "citationBibtex": "@article{pratama2025comparison,\n  author    = {Pratama, Yohanes Dimas and Salam, Abu},\n  title     = {Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset},\n  journal   = {Journal of Applied Informatics and Computing (JAIC)},\n  volume    = {9},\n  number    = {3},\n  pages     = {693--706},\n  year      = {2025},\n  issn      = {2548-6861},\n  doi       = {10.30871/jaic.v9i3.9353},\n  url       = {https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/9353}\n}",
    "citationStyles": {
      "apa": "Pratama, Y. D., & Salam, A. (2025). Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset. Journal of Applied Informatics and Computing (JAIC), 9(3), 693-706. https://doi.org/10.30871/jaic.v9i3.9353",
      "ieee": "Y. D. Pratama and A. Salam, \"Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset,\" Journal of Applied Informatics and Computing (JAIC), vol. 9, no. 3, pp. 693-706, Jun. 2025, doi: 10.30871/jaic.v9i3.9353.",
      "acm": "Yohanes Dimas Pratama and Abu Salam. 2025. Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset. Journal of Applied Informatics and Computing (JAIC) 9, 3 (June 2025), 693–706. https://doi.org/10.30871/jaic.v9i3.9353",
      "harvard": "Pratama, Y.D. and Salam, A., 2025. Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset. Journal of Applied Informatics and Computing (JAIC), 9(3), pp.693-706. Available at: <https://doi.org/10.30871/jaic.v9i3.9353>.",
      "chicago": "Pratama, Yohanes Dimas, and Abu Salam. 2025. \"Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset.\" Journal of Applied Informatics and Computing (JAIC) 9 (3): 693–706. https://doi.org/10.30871/jaic.v9i3.9353.",
      "mla": "Pratama, Yohanes Dimas, and Abu Salam. \"Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset.\" Journal of Applied Informatics and Computing (JAIC), vol. 9, no. 3, June 2025, pp. 693–706. DOI: 10.30871/jaic.v9i3.9353.",
      "bibtex": "@article{pratama2025comparison,\n  author    = {Pratama, Yohanes Dimas and Salam, Abu},\n  title     = {Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset},\n  journal   = {Journal of Applied Informatics and Computing (JAIC)},\n  volume    = {9},\n  number    = {3},\n  pages     = {693--706},\n  year      = {2025},\n  month     = {jun},\n  issn      = {2548-6861},\n  doi       = {10.30871/jaic.v9i3.9353},\n  url       = {https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/9353}\n}",
      "ris": "TY  - JOUR\nTI  - Comparison of Data Normalization Techniques on KNN Classification Performance for Pima Indians Diabetes Dataset\nAU  - Pratama, Yohanes Dimas\nAU  - Salam, Abu\nJO  - Journal of Applied Informatics and Computing (JAIC)\nVL  - 9\nIS  - 3\nSP  - 693\nEP  - 706\nPY  - 2025\nDA  - 2025/06/01\nDO  - 10.30871/jaic.v9i3.9353\nUR  - https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/9353\nSN  - 2548-6861\nER  -"
    },
    "references": [
      {
        "id": "ref-1",
        "authors": "I. W. Suryasa, M. Rodríguez-Gámez, and T. Koldoris",
        "title": "Health and Treatment of Diabetes Mellitus",
        "venue": "International Journal of Health Sciences (IJHS), vol. 5, no. 1, pp. I–V, 2021",
        "year": "2021",
        "doi": "10.53730/IJHS.V5N1.2864",
        "category": "Clinical & Diabetes"
      },
      {
        "id": "ref-2",
        "authors": "L. Ryden, G. Ferrannini, and E. Standl",
        "title": "Risk prediction in patients with diabetes: is SCORE 2D the perfect solution?",
        "venue": "Jul. 21, 2023, Oxford University Press",
        "year": "2023",
        "doi": "10.1093/eurheartj/ehad263",
        "category": "Clinical & Diabetes"
      },
      {
        "id": "ref-3",
        "authors": "S. Alam, M. K. Hasan, S. Neaz, N. Hussain, M. F. Hossain, and T. Rahman",
        "title": "Diabetes Mellitus: Insights from Epidemiology, Biochemistry, Risk Factors, Diagnosis, Complications and Comprehensive Management",
        "venue": "Jun. 01, 2021, MDPI",
        "year": "2021",
        "doi": "10.3390/diabetology2020004",
        "category": "Clinical & Diabetes"
      },
      {
        "id": "ref-4",
        "authors": "S. Templer, S. Abdo, and T. Wong",
        "title": "Preventing diabetes complications",
        "venue": "Intern Med J, vol. 54, no. 8, pp. 1264–1274, Aug. 2024",
        "year": "2024",
        "doi": "10.1111/imj.16455",
        "category": "Clinical & Diabetes"
      },
      {
        "id": "ref-5",
        "authors": "S. Zhang and J. Li",
        "title": "KNN Classification With One-Step Computation",
        "venue": "IEEE Trans Knowl Data Eng , vol. 35, no. 3, pp. 2711–2723, Mar. 2023",
        "year": "2021",
        "doi": "10.1109/TKDE.2021.3119140",
        "category": "KNN & Classification"
      },
      {
        "id": "ref-6",
        "authors": "N. Ukey, Z. Yang, B. Li, G. Zhang, Y. Hu, and W. Zhang",
        "title": "Survey on Exact kNN Queries over High-Dimensional Data Space",
        "venue": "Jan. 01, 2023, MDPI",
        "year": "2023",
        "doi": "10.3390/s23020629",
        "category": "KNN & Classification"
      },
      {
        "id": "ref-7",
        "authors": "S. Zhang",
        "title": "Challenges in KNN Classification",
        "venue": "IEEE Trans Knowl Data Eng , vol. 34, no. 10, pp. 4663 –4675, Oct. 2022",
        "year": "2021",
        "doi": "10.1109/TKDE.2021.3049250",
        "category": "KNN & Classification"
      },
      {
        "id": "ref-8",
        "authors": "M. V. Polyakova and V. N. Krylov",
        "title": "Data normalization methods to improve the quality of classification in the breast cancer diagnostic system",
        "venue": "Applied Aspects of Information Technology , vol. 5, no. 1, pp. 55–63, Apr. 2022",
        "year": "2022",
        "doi": "10.15276/aait.05.2022.5",
        "category": "Normalization & Scaling"
      },
      {
        "id": "ref-9",
        "authors": "M. Zulkifilu and A. Yasir",
        "title": "About Some Data Precaution Techniques For K-Means Clustering Algorithm",
        "venue": "UMYU Scientifica, vol. 1, no. 1, pp. 12 –19, 2022",
        "year": "2022",
        "doi": "10.47430/usci.1122.003",
        "category": "Data Preprocessing"
      },
      {
        "id": "ref-10",
        "authors": "M. Pagan, M. Zarlis, and A. Candra",
        "title": "Investigating the impact of data scaling on the k-nearest neighbor algorithm",
        "venue": "Computer Science and Information Technologies, vol. 4, no. 2, pp. 135–142, Jul. 2023",
        "year": "2023",
        "doi": "10.11591/csit.v4i2.pp135-142",
        "category": "Normalization & Scaling"
      },
      {
        "id": "ref-11",
        "authors": "A. Alsarhan, F. Hussein, S. Moh, and F. S. El-Salhi",
        "title": "The Effect of Preprocessing Techniques, Applied to Numeric Features, on Classification Algorithms' Performance",
        "venue": "Data (Basel), vol. 6, no. 2, 2021",
        "year": "2021",
        "doi": "10.3390/data",
        "category": "Data Preprocessing"
      },
      {
        "id": "ref-12",
        "authors": "S. Sinsomboonthong",
        "title": "Performance Comparison of New Adjusted Min-Max with Decimal Scaling and Statistical Column Normalization Methods for Artificial Neural Network Classification",
        "venue": "Int J Math Math Sci , vol. 2022, 2022",
        "year": "2022",
        "doi": "10.1155/2022/3584406",
        "category": "Normalization & Scaling"
      },
      {
        "id": "ref-13",
        "authors": "C. C. Olisah, L. Smith, and M. Smith",
        "title": "Diabetes mellitus prediction and diagnosis from a data preprocessing and machine learning perspective",
        "venue": "Comput Methods Programs Biomed , vol. 220, Jun. 2022",
        "year": "2022",
        "doi": "10.1016/j.cmpb.2022.106773",
        "category": "Clinical & Diabetes"
      },
      {
        "id": "ref-14",
        "authors": "A. M. Vommi and T. K. Battula",
        "title": "A hybrid filter-wrapper feature selection using Fuzzy KNN based on Bonferroni mean for medical datasets classification: A COVID-19 case study",
        "venue": "Expert Syst Appl, vol. 218, May 2023",
        "year": "2023",
        "doi": "10.1016/j.eswa.2023.119612",
        "category": "Feature Selection & RF"
      },
      {
        "id": "ref-15",
        "authors": "Y. Zhao",
        "title": "Comparative Analysis of Diabetes Prediction Models Using the Pima Indian Diabetes Database",
        "venue": "ITM Web of Conferences, vol. 70, p. 02021, Jan. 2025",
        "year": "2025",
        "doi": "10.1051/itmconf/20257002021",
        "category": "Clinical & Diabetes"
      },
      {
        "id": "ref-16",
        "authors": "V. Chang, J. Bailey, Q. A. Xu, and Z. Sun",
        "title": "Pima Indians diabetes mellitus classification based on machine learning (ML) algorithms",
        "venue": "Neural Comput Appl , vol. 35, no. 22, pp. 16157 – 16173, Aug. 2023",
        "year": "2023",
        "doi": "10.1007/s00521-022-07049-z",
        "category": "Clinical & Diabetes"
      },
      {
        "id": "ref-17",
        "authors": "V. Patil and D. R. Ingle",
        "title": "Comparative Analysis of Different ML Classification Algorithms with Diabetes Prediction through Pima Indian Diabetics Dataset",
        "venue": "in 2021 International Conference on Intelligent Technologies, CONIT 2021 , Institute of Electrical and Electronics Engineers Inc., Jun. 2021",
        "year": "2021",
        "doi": "10.1109/CONIT51480.2021.9498361",
        "category": "Clinical & Diabetes"
      },
      {
        "id": "ref-18",
        "authors": "H. Karamti et al",
        "title": "Improving Prediction of Cervical Cancer Using KNN Imputed SMOTE Features and Multi-Model Ensemble Learning Approach",
        "venue": "Cancers (Basel), vol. 15, no. 17, Sep. 2023",
        "year": "2023",
        "doi": "10.3390/cancers15174412",
        "category": "KNN & Classification"
      },
      {
        "id": "ref-19",
        "authors": "M. N. Maskuri, K. Sukerti, and R. M. Herdian Bhakti",
        "title": "Penerapan Algoritma K-Nearest Neighbor (KNN) untuk Memprediksi Penyakit Stroke Stroke Desease Predict Using KNN Algorithm",
        "venue": "Jurnal Ilmiah Intech : Information Technology Journal of UMUS , vol. 4, no. 1, May 2022",
        "year": "2022",
        "category": "KNN & Classification"
      },
      {
        "id": "ref-20",
        "authors": "C. Fan, M. Chen, X. Wang, J. Wang, and B. Huang",
        "title": "A Review on Data Preprocessing Techniques Toward Efficient and Reliable Knowledge Discovery From Building Operational Data",
        "venue": "Mar. 29, 2021, Frontiers Media S.A",
        "year": "2021",
        "doi": "10.3389/fenrg.2021.652801",
        "category": "Data Preprocessing"
      },
      {
        "id": "ref-21",
        "authors": "O. Alotaibi, E. Pardede, and S. Tomy",
        "title": "Cleaning Big Data Streams: A Systematic Literature Review",
        "venue": "Aug. 01, 2023, Multidisciplinary Digital Publishing Institute (MDPI)",
        "year": "2023",
        "doi": "10.3390/technologies11040101",
        "category": "Data Preprocessing"
      },
      {
        "id": "ref-22",
        "authors": "M. Arif, maruf Setiawan, A. Dwi Hartono, M. Arif Ma, and ruf Setiawan",
        "title": "Menggunakan Metode Machine Learning Untuk Memprediksi Nilai Mahasiswa Dengan Model Prediksi Multiclass",
        "venue": "Jurnal Informatika: Jurnal pengembangan IT, vol. 10, no. 1, p. 2025, 2025",
        "year": "2025",
        "doi": "10.30591/jpit.v9ix.xxx",
        "category": "Data Preprocessing"
      },
      {
        "id": "ref-23",
        "authors": "L. A. Demidova",
        "title": "Two-stage hybrid data classifiers based on svm and knn algorithms",
        "venue": "Symmetry (Basel), vol. 13, no. 4, Apr. 2021",
        "year": "2021",
        "doi": "10.3390/sym13040615",
        "category": "KNN & Classification"
      },
      {
        "id": "ref-24",
        "authors": "N. Pudjihartono, T. Fadason , A. W. Kempa -Liehr, and J. M. O'Sullivan",
        "title": "A Review of Feature Selection Methods for Machine Learning-Based Disease Risk Prediction",
        "venue": "Jun. 27, 2022, Frontiers Media SA",
        "year": "2022",
        "doi": "10.3389/fbinf.2022.927312",
        "category": "Feature Selection & RF"
      },
      {
        "id": "ref-25",
        "authors": "M. Alduailij, Q. W. Khan, M. Tahir, M. Sardaraz, M. Alduailij, and F. Malik",
        "title": "Machine-Learning-Based DDoS Attack Detection Using Mutual Information and Random Forest Feature Importance Method",
        "venue": "Symmetry (Basel) , vol. 14, no. 6, Jun. 2022",
        "year": "2022",
        "doi": "10.3390/sym14061095",
        "category": "Feature Selection & RF"
      },
      {
        "id": "ref-26",
        "authors": "A. G. Priya Varshini, K. Anitha Kumari, and V. Varadarajan",
        "title": "Estimating software development efforts using a random forest-based stacked ensemble approach",
        "venue": "Electronics (Switzerland), vol. 10, no. 10, May 2021",
        "year": "2021",
        "doi": "10.3390/electronics10101195",
        "category": "Feature Selection & RF"
      },
      {
        "id": "ref-27",
        "authors": "R. A. Disha and S. Waheed",
        "title": "Performance analysis of machine learning models for intrusion detection system using Gini Impurity-based Weighted Random Forest (GIWRF) feature selection technique",
        "venue": "Cybersecurity, vol. 5, no. 1, Dec. 2022",
        "year": "2022",
        "doi": "10.1186/s42400-021-00103-8",
        "category": "Feature Selection & RF"
      },
      {
        "id": "ref-28",
        "authors": "P. J. Muhammad Ali",
        "title": "Investigating the Impact of Min-Max Data Normalization on the Regression Performance of K-Nearest Neighbor with Different Similarity Measurements",
        "venue": "ARO-THE SCIENTIFIC JOURNAL OF KOYA UNIVERSITY , vol. 10, no. 1, pp. 85–91, Jun. 2022",
        "year": "2022",
        "doi": "10.14500/aro.10955",
        "category": "Normalization & Scaling"
      },
      {
        "id": "ref-29",
        "authors": "Henderi , T. Wahyuningsih , and E. Rahwanto",
        "title": "Comparison of Min-Max normalization and Z-Score Normalization in the K-nearest neighbor (kNN) Algorithm to Test the Accuracy of Types of Breast Cancer",
        "venue": "International Journal of Informatics and Information System, vol. 4, no. 1, Mar. 2021, [Online]. Available: http://archive.ics.uci.edu/ml",
        "year": "2021",
        "category": "Normalization & Scaling"
      },
      {
        "id": "ref-30",
        "authors": "M. R. Firmansyah and Y. P. Astuti",
        "title": "Stroke Classification Comparison with KNN through Standardization and Normalization Techniques",
        "venue": "Advance Sustainable Science, Engineering and Technology, vol. 6, no. 1, Jan. 2024",
        "year": "2024",
        "doi": "10.26877/asset.v6i1.17685",
        "category": "Normalization & Scaling"
      },
      {
        "id": "ref-31",
        "authors": "Emad Majeed Hameed and Hardik Joshi",
        "title": "Improving Diabetes Prediction by Selecting Optimal K and Distance Measures in KNN Classifier",
        "venue": "Journal of Techniques, vol. 6, no. 3, pp. 19 –25, Aug. 2024",
        "year": "2024",
        "doi": "10.51173/jt.v6i3.2587",
        "category": "KNN & Classification"
      },
      {
        "id": "ref-32",
        "authors": "G. Fatima and S. Saeed",
        "title": "A Novel Weighted Ensemble Method to Overcome the Impact of Under-fitting and Over-fitting on the Classification Accuracy of the Imbalanced Data Sets",
        "venue": "Pakistan Journal of Statistics and Operation Research , vol. 17, no. 2, pp. 483–496, 2021",
        "year": "2021",
        "doi": "10.18187/pjsor.v17i2.3640",
        "category": "Data Preprocessing"
      },
      {
        "id": "ref-33",
        "authors": "S. Gündoğdu",
        "title": "Efficient prediction of early-stage diabetes using XGBoost classifier with random forest feature selection technique",
        "venue": "Multimed Tools Appl , vol. 82, no. 22, pp. 34163 – 34181, Sep. 2023",
        "year": "2023",
        "doi": "10.1007/s11042-023-15165-8",
        "category": "Feature Selection & RF"
      },
      {
        "id": "ref-34",
        "authors": "A. S. Maklad, M. A. Mahdy, A. Malki, N. Niki, and A. A. Mohamed",
        "title": "Advancing Early Detection of Colorectal Adenomatous Polyps via Genetic Data Analysis: A Hybrid Machine Learning Approach",
        "venue": "Journal of Computer and Communications, vol. 12, no. 07, pp. 23 –38, 2024",
        "year": "2024",
        "doi": "10.4236/jcc.2024.127003",
        "category": "Data Preprocessing"
      },
      {
        "id": "ref-35",
        "authors": "A. Zweifach",
        "title": "Samples in many cell-based experiments are matched/paired but taking this into account does not always increase power of statistical tests for differences in means",
        "venue": "Molecular Biology of the Cell (MBoC), vol. 35, no. 1, p. br1, Jan. 2024",
        "year": "2024",
        "doi": "10.1091/mbc.E23-05-0159",
        "category": "Statistical Inference"
      }
    ]
  }
]
```
